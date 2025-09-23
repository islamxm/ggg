import {
  Typography,
  Space,
  Input,
  Modal,
  Flex,
  Row,
  Col,
  Button,
  type ModalFuncProps
} from "antd"
import type { PositionTypes, Ranks } from "@shared/types/common"
import type { BG_Person, CB_Person, Person } from "@entities/person/model"

const { Title } = Typography



export const CbPersonForm = () => {
  return (
    <Flex vertical gap={10}>
      <Space.Compact>
        <Typography.Title level={5}>Ady</Typography.Title>
        <Input placeholder='Ady' />
      </Space.Compact>
    </Flex>
  )
}