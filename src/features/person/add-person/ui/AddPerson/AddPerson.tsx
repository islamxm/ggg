import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { AddPersonModal } from '../AddPersonModal/AddPersonModal'
import { useState } from 'react'


export const AddPerson = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <AddPersonModal
        open={isOpen}
        onCancel={() => setIsOpen(false)}
      />
      <Button
        onClick={() => setIsOpen(true)}
        variant='solid'
        color={'green'}
      >
        Täze harby gullukçyny goş
      </Button>
    </>
  )
}