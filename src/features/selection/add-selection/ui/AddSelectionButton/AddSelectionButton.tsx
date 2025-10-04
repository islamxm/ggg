import { Button, Tooltip, type ButtonProps } from "antd"
import { useState, type FC } from "react"
import { PlusOutlined } from '@ant-design/icons'
import { AddSelectionModal } from "../AddSelectionModal/AddSelectionModal"
type Props = ButtonProps & {
  fractionId: number
}

const defaultProps: ButtonProps = {
  color: 'cyan',
  variant: 'solid',
  icon: <PlusOutlined />,
  children: 'Bellik goş'
}

export const AddSelectionButton: FC<Props> = ({
  fractionId,
  ...props
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <AddSelectionModal
        open={open}
        onCancel={() => setOpen(false)}
        fractionId={fractionId}
      />
      <Tooltip
        title='Bellik goş'
        >
        <Button
          {...defaultProps}
          {...props}
          onClick={() => setOpen(true)}
        >
          {props?.children}
        </Button>
      </Tooltip>

    </>
  )
}