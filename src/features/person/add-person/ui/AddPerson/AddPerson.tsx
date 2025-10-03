import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { AddPersonModal } from '../AddPersonModal/AddPersonModal'
import { useState } from 'react'
import { successBtnDefProps } from '@shared/config/successBtnDefProps'


export const AddPerson = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AddPersonModal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      />
      <Button
        {...successBtnDefProps}
        icon={<PlusOutlined/>}
        onClick={() => setIsOpen(true)}
      >
        Täze harby gullukçyny goş
      </Button>
    </>
  )
}