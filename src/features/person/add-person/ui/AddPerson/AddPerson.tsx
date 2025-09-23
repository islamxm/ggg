import { Button, Tooltip } from 'antd'
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
      <Tooltip title='Täze harby gullukçyny goş'>
        <Button
          onClick={() => setIsOpen(true)}
          variant='solid'
          color={'green'}
          size='large'
          icon={<PlusOutlined />}/>
      </Tooltip>
    </>
  )
}