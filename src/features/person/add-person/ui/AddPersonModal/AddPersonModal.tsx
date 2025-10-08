import { personsActions, type BG_Person, type CB_Person } from "@entities/person"
import type { PositionTypes, Ranks, Regions } from "@shared/types/common"
import {
  Input,
  Modal,
  Flex,
  Row,
  Col,
  Button,
  Select,
  DatePicker,
  Form,
  type ModalFuncProps
} from "antd"
import { useState, type FC } from "react"
import { CbPersonForm } from "../CbPersonForm/CbPersonForm"
import { BgPersonForm } from "../BgPersonForm/BgPersonForm"
import { regions } from "@shared/consts/regions"
import { ranksArray } from "@shared/consts/ranks"
import { db } from "@shared/config/dbConfig"
import classes from './classes.module.scss'
import { useDispatch } from "@shared/hooks/useReduxStore"
import { toast } from 'sonner'
import { addPerson } from "@entities/person"
import  { Dayjs } from 'dayjs'
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"

type Props = ModalFuncProps

const requiredField = {
  rules: [{ required: true, message: 'Hökman doldurylmaly meýdan' }]
}

type BaseInputs = {
  firstName: string,
  lastName: string,
  patronymic: string,
  rank: Ranks
  region: Regions
  dateOfBirth: Dayjs
  positionType: PositionTypes

  part?: 'I' | 'II'
  year?: Dayjs

  dateOfEnlistment?: Dayjs
  phone?: string,
  adress?: string
}

export const AddPersonModal: FC<Props> = (props) => {
  const dispatch = useDispatch()
  const [positionType, setPositionType] = useState<PositionTypes>()
  const [form] = Form.useForm<BaseInputs>()
  const [isLoading, setIsLoading] = useState(false)

  const onAddPerson = (data: BaseInputs) => {
    const {
      firstName,
      lastName,
      patronymic,

      part,
      year,

      dateOfEnlistment,
      phone,
      adress,
      ...rest
    } = data
    const name = { firstName, lastName, patronymic }
    const isCbDataEnough = part && year
    const isBgDataEnough = dateOfEnlistment
    setIsLoading(true)
    if (data.positionType === 'cb' && isCbDataEnough) {

      const cbPerson: Omit<CB_Person, 'id'> = {
        ...rest,
        dateOfBirth: data.dateOfBirth.toDate(),
        positionType: 'cb',
        name,
        period: { part, year: year.toDate() },
      }
      addPerson({
        db, personData: cbPerson,
      })
        .then((id) => {
          toast.success('Täze harby gullukçy goşuldy')
          dispatch(personsActions.add({ ...cbPerson, id }))
        })
        .catch(() => {
          toast.error(ERROR_DEFAULT)
        })
        .finally(() => {
          setIsLoading(false)
          onCancel()
        })
    }

    if (data.positionType === 'bg' && isBgDataEnough) {
      const bgPerson: Omit<BG_Person, 'id'> = {
        ...rest,
        dateOfBirth: data.dateOfBirth.toDate(),
        positionType: 'bg',
        name,
        dateOfEnlistment: dateOfEnlistment.toDate(),
        phone,
        adress
      }
      addPerson({
        db, personData: bgPerson,
      })
        .then((id) => {
          toast.success('Täze harby gullukçy goşuldy')
          dispatch(personsActions.add({ ...bgPerson, id }))
        })
        .catch(() => {
          toast.error(ERROR_DEFAULT)
        })
        .finally(() => {
          setIsLoading(false)
          onCancel()
        })
    }
  }

  const onCancel = () => {
    setPositionType(undefined)
    form.resetFields()
    props?.onCancel?.()
  }

  return (
    <Modal
      {...props}
      onCancel={onCancel}
      title={'Täze harby gullukçyny goş'}
      footer={null}
      className={classes.wrapper}
    >
      <Form
        form={form}
        name="add-person"
        onFinish={onAddPerson}
      >
        <Flex vertical gap={10}>
          <Form.Item
            className={classes.formItem}
            name={'positionType'}
            {...requiredField}
          >
            <Select
              onSelect={e => setPositionType(e)}
              options={[{ value: 'cb', label: 'Çagyryş boýunça harby gullukçy' }, { value: 'bg', label: 'Borçnama boýunça harby gullukçy' }]}
              placeholder="Çagyryş boýunça ýa-da borçnama boýunça harby gullukçy"
            />
          </Form.Item>
          <Form.Item
            {...requiredField}
            className={classes.formItem}
            name={'firstName'}
          >
            <Input
              addonBefore={'Ady'} />
          </Form.Item>
          <Form.Item
            {...requiredField}
            className={classes.formItem}
            name={'lastName'}
          >
            <Input
              addonBefore={'Familiýasy'} />
          </Form.Item>
          <Form.Item
            className={classes.formItem}
            name={'patronymic'}
          >
            <Input
              addonBefore={'Atasynyň ady'} />
          </Form.Item>
          <Form.Item
            className={classes.formItem}
            name={'region'}
            {...requiredField}
          >
            <Select
              options={regions.map(region => ({ value: region.value, label: region.label }))}
              placeholder='Welaýaty'
            />
          </Form.Item>
          <Form.Item
            className={classes.formItem}
            name={'dateOfBirth'}
            {...requiredField}
          >
            <DatePicker
              style={{ width: '100%' }}
              placeholder="Doglan güni"
              format={'DD.MM.YYYY'}
            />
          </Form.Item>
          {
            positionType && (
              <Form.Item
                className={classes.formItem}
                name={'rank'}
                {...requiredField}
              >
                <Select
                  options={ranksArray.filter(rank => rank.positionType === positionType).map(rank => ({ value: rank.value, label: rank.label }))}
                  placeholder='Harby ady'
                />
              </Form.Item>
            )
          }

          {positionType === 'cb' &&
            <CbPersonForm />
          }
          {positionType === 'bg' &&
            <BgPersonForm />
          }
          <Row gutter={[5, 5]}>
            <Col span={12}>
              <Button
                onClick={onCancel}
                style={{ width: '100%' }}
                variant={'filled'}
                color={'danger'}>
                Bes et
              </Button>
            </Col>
            <Col span={12}>
              <Form.Item
                className={classes.formItem}
              >
                <Button
                  htmlType={'submit'}
                  style={{ width: '100%' }}
                  variant="solid"
                  loading={isLoading}
                  color="green">
                  Ýatda sakla
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Flex>
      </Form>
    </Modal>
  )
}