import type { Person } from '@entities/person'
import { Popconfirm, Button } from 'antd'
import { useState, type FC } from 'react'
import {
  DeleteOutlined
} from '@ant-design/icons'
import { useDispatch } from '@shared/hooks/useReduxStore'
import { deletePerson, personsActions } from '@entities/person'
import { db } from '@shared/config/dbConfig'
import { toast } from 'sonner'

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
      personId,
    }).then(() => {
      toast.success('Harby gullukçy barada ähli maglumat pozuldy')
      dispatch(personsActions.delete(personId))
    }).catch(() => {
      toast.error('Ýalňyşlyk ýüze çykdy, ýene-de synanşyp görüň')
    }).finally(() => {
      setIsLoading(false)
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