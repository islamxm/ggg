import { Button, type ButtonProps } from "antd"
import { useState, type FC } from "react"
import { DeletePersonModalConfirm } from "../DeletePersonModalConfirm/DeletePersonModalConfirm"
import {WarningOutlined} from '@ant-design/icons'
import type { Person } from "@entities/person"

type Props = {
  size?: ButtonProps['size']
  currentPerson?: Person
}

export const DeletePersonButtonWithModal:FC<Props> = ({
  size = 'large',
  currentPerson
}) => {
  const [open, setOpen] = useState(false)


  return (
    <>
      <DeletePersonModalConfirm
        open={open}
        currentPerson={currentPerson}
        onCancel={() => setOpen(false)}
        />
      <Button
        onClick={() => setOpen(true)}
        variant={'solid'}
        color={'danger'}
        size={size}
        >
        <WarningOutlined/>
        Harby gullukçyny ýok et
      </Button>
    </>
  )
}