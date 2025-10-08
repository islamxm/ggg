import { Button } from "antd"
import { PlusOutlined } from '@ant-design/icons'
import { useState } from "react"
import { AddAchieveModal } from "../AddAchieveModal/AddAchieveModal"

export const AddAchieveButton = () => {
  const [open, setOpen] = useState(false)


  return (
    <>
      <AddAchieveModal
        open={open}
        onCancel={() => setOpen(false)}
      />
      <Button
        variant={'solid'}
        color={'gold'}
        icon={<PlusOutlined />}
        onClick={() => setOpen(true)}
      >
        Höweslendirme goş
      </Button>
    </>

  )
}