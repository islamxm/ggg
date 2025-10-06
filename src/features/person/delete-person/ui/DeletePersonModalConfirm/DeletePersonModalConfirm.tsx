import type { Person } from '@entities/person'
import { Button, Col, Flex, Modal, Row, Typography, type ModalFuncProps } from 'antd'
import { type FC, useState } from 'react'
import { db } from '@shared/config/dbConfig'
import { useNavigate } from 'react-router'
import { ERROR_DEFAULT } from '@shared/consts/errorMessages'
import { toast } from 'sonner'
import { ranks } from '@shared/consts/ranks'
import { deletePerson, PersonCard } from '@entities/person'

type Props = ModalFuncProps & {
  onConfirmDelete?: DefFunc,
  currentPerson?: Person
}

export const DeletePersonModalConfirm: FC<Props> = ({
  onConfirmDelete,
  currentPerson,
  onCancel,
  ...restProps
}) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  const onDelete = () => {
    if (currentPerson) {
      setIsLoading(true)
      deletePerson({
        db,
        personId: currentPerson.id,
      }).then(() => {
        toast.success('Harby gullukçy barada ähli maglumat pozuldy')
        navigate(-1)
      }).catch(() => {
        toast.error(ERROR_DEFAULT)
      }).finally(() => {
        setIsLoading(false)
      })
    }
  }

  if (!currentPerson) return null

  return (
    <Modal
      {...restProps}
      onCancel={onCancel}
      footer={null}
      confirmLoading={isLoading}
    >
      <Flex align={'center'} vertical gap={20}>
        <Typography.Text>
          <b>{`${ranks[currentPerson.rank].label} ${currentPerson.name.firstName[0]}.${currentPerson.name.lastName} `}</b>
          baradaky ähli maglumatlar, ýagny:
          <ul style={{ margin: 0 }}>
            <li>harby gullukçynyň şahsy maglumaty</li>
            <li>tabşyryklary baradaky maglumaty</li>
            <li>höweslendirmeleri</li>
          </ul>
          düýbünden ýok ediler. Tassyklaýarsyňyzmy?
        </Typography.Text>
        <Row gutter={10} style={{ width: '100%' }}>
          <Col span={12}>
            <Button
              color='green'
              variant='solid'
              style={{ width: '100%' }}
              loading={isLoading}
              onClick={onDelete}
            >
              Hawa
            </Button>
          </Col>
          <Col span={12}>
            <Button
              variant='solid'
              color='danger'
              style={{ width: '100%' }}
              onClick={onCancel}
            >
              Ýok
            </Button>
          </Col>
        </Row>
      </Flex>
    </Modal>
  )
}