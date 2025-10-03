import { successBtnDefProps } from "@shared/config/successBtnDefProps"
import { Button } from "antd"
import { PlusOutlined } from '@ant-design/icons'
import { AddFractionModal } from "../AddFractionModal/AddFractionModal"
import { useState } from "react"

export const AddFraction = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AddFractionModal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      />
      <Button
        {...successBtnDefProps}
        icon={<PlusOutlined />}
        style={{ width: 'auto' }}
        onClick={() => setIsOpen(true)}
      >
        Täze bölümçäni goş
      </Button>
    </>
  )
}