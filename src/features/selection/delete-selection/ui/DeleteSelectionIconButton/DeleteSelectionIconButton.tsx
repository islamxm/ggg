import { Button } from "antd"
import { DeleteOutlined } from '@ant-design/icons'
import { db } from "@shared/config/dbConfig"
import { deleteSelections, type Selection } from "@entities/selection"
import { useState, type FC } from "react"
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"

type Props = {
  selectionId: Selection['id'],
  onDeleted?: (selectionId: Selection['id']) => void
}

export const DeleteSelectionIconButton: FC<Props> = ({
  selectionId,
  onDeleted
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const onDelete = () => {
    setIsLoading(true)
    deleteSelections({
      db,
      selectionsIds: [selectionId]
    })
      .then(() => {
        toast.success('Seljerme pozuldy')
        onDeleted?.(selectionId)
      })
      .catch(() => toast.error(ERROR_DEFAULT))
      .finally(() => setIsLoading(false))
  }

  return (
    <Button
      onClick={onDelete}
      loading={isLoading}
      variant={'solid'}
      color={'danger'}
      icon={<DeleteOutlined />}
    />

  )
}