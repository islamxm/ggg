import type { Person } from '@entities/person'
import { Popconfirm, Button } from 'antd'
import { useState, type FC } from 'react'
import {
  DeleteOutlined
} from '@ant-design/icons'
import { useDispatch } from '@shared/hooks/useReduxStore'
import { deletePerson } from '../../model/deletePerson'
import { db } from '@shared/config/dbConfig'
import {toast} from 'sonner'

type Props = {
  personId: Person['id']
}

export const DeletePersonButtonWithConfirm: FC<Props> = ({
  personId,
}) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const onDelete = () => {
    setIsLoading(true)
    deletePerson({
      db,
      dispatch,
      personId,
      onSuccess() {
        toast.success('Harby gullukçy barada ähli maglumat pozuldy')
      },
      onError() {
        toast.error('Ýalňyşlyk ýüze çykdy, ýene-de synanşyp görüň')
      },
      onFinally() { setIsLoading(false) }
    })
  }

  return (
    <Popconfirm
      title="Pozmagy tassyklaýarsyňyzmy?"
      placement={'leftBottom'}
      okText="Hawa"
      cancelText="Ýok"
      onConfirm={onDelete}
      okButtonProps={{ loading: isLoading }}
    >
      <Button
        style={{ width: '100%' }}
        icon={<DeleteOutlined />}
        color={'danger'}
        variant={'solid'}>
        Poz
      </Button>
    </Popconfirm>
  )
}