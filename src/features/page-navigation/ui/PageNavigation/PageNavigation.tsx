import { Flex, Button } from "antd"
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router"

export const PageNavigation = () => {
  const navigate = useNavigate()

  return (
    <Flex gap={5} align={'center'} style={{padding: '0 5px'}}>
      <Button
        onClick={() => navigate(-1)}
        icon={<ArrowLeftOutlined />}
        shape={'circle'}
        variant={'solid'}
      />
      <Button
        onClick={() => navigate(+1)}
        icon={<ArrowRightOutlined />}
        shape={'circle'}
        variant={'solid'}
      />
    </Flex>
  )
}