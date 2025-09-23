import type { BG_Person, CB_Person, Person } from "@entities/person/model"
import { positionTypes } from "@shared/consts/positionTypes"
import type { PositionTypes, Ranks } from "@shared/types/common"
import { 
  Typography, 
  Space, 
  Input, 
  Modal, 
  Flex, 
  Row, 
  Col, 
  Button,
  Select,
  type ModalFuncProps 
} from "antd"
import { useState, type FC } from "react"
import { CbPersonForm } from "../CbPersonForm/CbPersonForm"

const { Title } = Typography

type Props = ModalFuncProps

export const AddPersonModal: FC<ModalFuncProps> = (props) => {
  const [positionType, setPositionType] = useState<PositionTypes>()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [patronymic, setPatronymic] = useState('')
  const [rank, setRank] = useState<Ranks>()
  const [dateOfBirth, setDateOfBirth] = useState()
  
  const [period, setPeriod] = useState<CB_Person['period']>()
  const [dateOfEnlistment, setDateOfEnlistment] = useState<BG_Person['dateOfEnlistment']>()
  const [phone, setPhone] = useState('')
  const [adress, setAdress] = useState('')


  return (
    <Modal
      {...props}
      title={'Täze harby gullukçyny goş'}
      footer={null}
      open
    >
      <Flex vertical gap={10}>
          <Input addonBefore={'Ady'}/>
          <Input addonBefore={'Familiýasy'}/>
          <Input addonBefore={'Atasynyň ady'}/>
          <Select
            onChange={setPositionType}
            options={positionTypes.map(type => ({value: type.value, label: type.label}))}
            placeholder='Çagyryş boýunça ýa-da borçnama gullugynyň harby gullukçysy'
            />
       
       {/* condition */}
      {positionType === 'cb' && <CbPersonForm/>}
      {positionType === 'bg' && null}

        <Row gutter={[5,5]}>
          <Col span={12}><Button size="large" style={{width: '100%'}} variant={'solid'} color={'danger'}>Bes et</Button></Col>
          <Col span={12}><Button size="large" style={{width: '100%'}} variant="solid" color="green">Ýatda sakla</Button></Col>
        </Row>
      </Flex>
    </Modal>
  )
}