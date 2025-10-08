import { achieveActions, achievesArray, addAchieve, type Achieves } from "@entities/achieve"
import { Button, Col, DatePicker, Flex, Modal, Row, Select, type ModalFuncProps } from "antd"
import { useState, type FC } from "react"
import dayjs, { Dayjs } from 'dayjs'
import { successBtnDefProps } from "@shared/config/successBtnDefProps"
import { db } from "@shared/config/dbConfig"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { selectCurrentPerson } from "@entities/person"
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"

export const AddAchieveModal: FC<ModalFuncProps> = ({
  ...props
}) => {
  const dispatch = useDispatch()
  const currentPerson = useSelector(selectCurrentPerson)
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [achieveType, setAchieveType] = useState<Achieves>()
  const [isLoading, setIsLoading] = useState(false)

  const onCancel = () => {
    setDate(dayjs())
    setAchieveType(undefined)
    props?.onCancel?.()
  }

  const onSave = () => {
    if (!date || !achieveType || !currentPerson) return
    setIsLoading(true)
    addAchieve({
      db,
      achieve: {
        date: date.toDate(),
        achieveType,
        personId: currentPerson.id
      }
    })
      .then(achieveId => {
        toast.success('Höweslendirme goşuldy')
        dispatch(achieveActions.add({
          id: achieveId,
          date: date.toDate(),
          achieveType,
          personId: currentPerson.id
        }))
        onCancel()
      })
      .catch(() => toast.error(ERROR_DEFAULT))
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Modal
      {...props}
      onCancel={onCancel}
      title='Höweslendirme goş'
      footer={null}
    >
      <Flex vertical gap={10}>
        <DatePicker
          value={date}
          onChange={setDate}
          format={'DD.MM.YYYY'}
          placeholder="Senesini saýla"
        />
        <Select
          value={achieveType}
          onChange={setAchieveType}
          options={achievesArray.map((achieve) => ({ label: achieve.label, value: achieve.value }))}
          placeholder="Höweslendirmäni saýla"
        />
        <Col span={24}>
          <Row gutter={[5, 5]}>
            <Col span={12}>
              <Button
                onClick={onCancel}
                variant={'filled'}
                color={'danger'}
                style={{ width: '100%' }}
              >
                Bes et
              </Button>
            </Col>
            <Col span={12}>
              <Button
                {...successBtnDefProps}
                loading={isLoading}
                onClick={onSave}
                disabled={!date || !currentPerson || !achieveType}
              >
                Ýatda sakla
              </Button>
            </Col>
          </Row>
        </Col>
      </Flex>
    </Modal>
  )
}