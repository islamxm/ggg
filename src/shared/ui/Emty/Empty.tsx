import {DeleteColumnOutlined} from '@ant-design/icons'
import { Flex, Typography } from 'antd'

export const Empty = () => {
  return (
    <Flex  vertical>
      <DeleteColumnOutlined/>
      <Typography.Text>Maglumat ýok</Typography.Text>
    </Flex>
  )
}