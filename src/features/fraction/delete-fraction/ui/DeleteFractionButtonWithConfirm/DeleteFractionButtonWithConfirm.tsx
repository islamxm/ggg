import type { Person } from '@entities/person'
import { Popconfirm, Button } from 'antd'
import { useState, type FC } from 'react'
import {
  DeleteOutlined
} from '@ant-design/icons'
import { useDispatch } from '@shared/hooks/useReduxStore'
import { db } from '@shared/config/dbConfig'
import { toast } from 'sonner'
import { deleteFraction } from '../../model/deleteFraction'
import type { Fraction } from '@entities/fraction'
import { ERROR_DEFAULT } from '@shared/consts/errorMessages'
import { dangerBtnDefProps } from '@shared/config/dangerBtnDefProps'

type Props = {
  fractionId: Fraction['id']
}

export const DeleteFractionButtonWithConfirm: FC<Props> = ({
  fractionId,
}) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const onDelete = () => {
    setIsLoading(true)
    deleteFraction({
      db,
      dispatch,
      fractionId,
      onSuccess() {
        toast.success('Bölümçe barada ähli maglumat pozuldy')
      },
      onError() {
        toast.error(ERROR_DEFAULT)
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
        {...dangerBtnDefProps}
        icon={<DeleteOutlined />}
        >
        Poz
      </Button>
    </Popconfirm>
  )
}