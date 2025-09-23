import type { BG_Person, CB_Person } from "@entities/person/model"
import type { PositionTypes, Ranks } from "@shared/types/common"
import {
  Input,
  Modal,
  Flex,
  Row,
  Col,
  Button,
  Select,
  DatePicker,
  type ModalFuncProps
} from "antd"
import { useState, type FC } from "react"
import { CbPersonForm } from "../CbPersonForm/CbPersonForm"
import { BgPersonForm } from "../BgPersonForm/BgPersonForm"
import { regions } from "@shared/consts/regions"
import { ranks, ranksArray } from "@shared/consts/ranks"

type Props = ModalFuncProps

export const AddPersonModal: FC<Props> = ({ onCancel, ...props }) => {
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
      onCancel={onCancel}
      title={'Täze harby gullukçyny goş'}
      footer={null}
    >
      <Flex vertical gap={10}>
        <Input addonBefore={'Ady'} />
        <Input addonBefore={'Familiýasy'} />
        <Input addonBefore={'Atasynyň ady'} />
        <Select
          onChange={setPositionType}
          options={regions.map(region => ({ value: region.value, label: region.label }))}
          placeholder='Welaýaty'
        />
        <DatePicker
          placeholder="Doglan güni"
        />
        <Select
          onChange={(e: Ranks) => {
            setPositionType(ranks[e].positionType)
            setRank(e)
          }}
          options={ranksArray.map(rank => ({ value: rank.value, label: rank.label }))}
          placeholder='Harby ady'
        />

        {positionType === 'cb' && <CbPersonForm />}
        {positionType === 'bg' && <BgPersonForm />}

        <Row gutter={[5, 5]}>
          <Col span={12}>
            <Button
              onClick={onCancel}
              size="large"
              style={{ width: '100%' }}
              variant={'solid'}
              color={'danger'}>
              Bes et
            </Button>
          </Col>
          <Col span={12}>
            <Button 
              size="large" 
              style={{ width: '100%' }} 
              variant="solid" 
              color="green">
              Ýatda sakla
            </Button>
          </Col>
        </Row>
      </Flex>
    </Modal>
  )
}