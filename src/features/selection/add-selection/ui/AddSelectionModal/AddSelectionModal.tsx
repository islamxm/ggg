import type { Deviation } from "@entities/selection/model/types"
import { dangerBtnDefProps } from "@shared/config/dangerBtnDefProps"
import { successBtnDefProps } from "@shared/config/successBtnDefProps"
import { Button, Col, Flex, Modal, Row, type ModalFuncProps, Input, Form, DatePicker } from "antd"
import { useState, type FC } from "react"
import { useAddSelection } from "../../lib/useAddSelection"
import type { Dayjs } from 'dayjs'
import { addSelection } from "../../model/addSelection"
import { db } from "@shared/config/dbConfig"
import { useDispatch } from "@shared/hooks/useReduxStore"
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"

type FormType = {
  description: string
  date: Dayjs
}

type Props = ModalFuncProps & {
  fractionId: number,
}

export const AddSelectionModal: FC<Props> = ({
  fractionId,
  ...props
}) => {
  const dispatch = useDispatch()
  const [deviation, setDeviation] = useState<Deviation>('+')
  const [form] = Form.useForm<FormType>()
  const [isLoading, setIsLoading] = useState(false)
  const { getReadyToAddSelectionData } = useAddSelection()

  const onCancel = () => {
    form.resetFields()
    props?.onCancel?.()
  }

  const onAddSelection = (data: FormType) => {
    setIsLoading(true)
    const { date, description = '' } = data
    const newData = getReadyToAddSelectionData({
      fractionId,
      date,
      data: {
        deviation,
        description
      }
    })
    addSelection({
      db,
      dispatch,
      data: {
        fractionId,
        selection: newData
      },
      onSuccess() {
        toast.success('Bellik goşuldy')
      },
      onError() {
        toast.error(ERROR_DEFAULT)
      },
      onFinally() {
        setIsLoading(false)
      }
    })
  }

  return (
    <Modal
      {...props}
      footer={null}
      title='Bellik'
      onCancel={onCancel}
    >
      <Form
        name="add-selection"
        form={form}
        onFinish={onAddSelection}
      >
        <Flex vertical gap={20}>
          <Col span={24}>
            <Row gutter={[5, 5]}>
              <Col span={12}>
                <Button
                  color={'primary'}
                  style={{ width: '100%' }}
                  onClick={() => setDeviation('+')}
                  variant={deviation === '+' ? 'solid' : 'outlined'}
                  // color={'green'}
                  shape={'round'}
                >
                  Üstünlik
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  onClick={() => setDeviation('-')}
                  color={'primary'}
                  style={{ width: '100%' }}
                  shape={'round'}
                  variant={deviation === '-' ? 'solid' : 'outlined'}
                // color={'danger'}
                >
                  Kemçilik
                </Button>
              </Col>
            </Row>
          </Col>
          <Form.Item
            style={{ margin: 0 }}
            name={'date'}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder="Senesini saýla"
            />
          </Form.Item>
          <Form.Item
            style={{ margin: 0 }}
            name={'description'}
          >
            <Input.TextArea
              style={{ height: 200, resize: 'none' }}
              placeholder="Edilen bellik hakynda içgin maglumat"
            />
          </Form.Item>

          <Col span={24}>
            <Row gutter={[5, 5]}>
              <Col span={12}>
                <Button
                  {...dangerBtnDefProps}
                  variant={'filled'}
                  onClick={onCancel}
                  >
                  Bes et
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  {...successBtnDefProps}
                  htmlType={'submit'}
                  loading={isLoading}
                >
                  Ýatda sakla
                </Button>
              </Col>
            </Row>
          </Col>
        </Flex>
      </Form>

    </Modal>
  )
}