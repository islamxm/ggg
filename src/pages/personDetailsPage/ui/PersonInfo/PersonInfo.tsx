import { Form, Input, Flex, Select, DatePicker, Button } from 'antd'
import type { Ranks, Regions, PositionTypes } from '@shared/types/common'
import { personsActions, selectCurrentPerson, updatePerson, type BG_Person, type CB_Person, type Person } from '@entities/person'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from '@shared/hooks/useReduxStore'
import { regions } from '@shared/consts/regions'
import { ranks, ranksArray } from '@shared/consts/ranks'
import { DeletePersonButtonWithModal } from '@features/person/delete-person/ui/DeletePersonButtonWithModal/DeletePersonButtonWithModal'
import dayjs, { Dayjs } from 'dayjs'
import { PersonCbInfo } from '../PersonCbInfo/PersonCbInfo'
import { PersonBgInfo } from '../PersonBgInfo/PersonBgInfo'
import { db } from '@shared/config/dbConfig'
import { toast } from 'sonner'
import { ERROR_DEFAULT } from '@shared/consts/errorMessages'

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

export const PersonInfo = () => {
  const dispatch = useDispatch()
  const currentPerson = useSelector(selectCurrentPerson)
  const [form] = Form.useForm<BaseInputs>()
  const [positionType, setPositionType] = useState<Person['positionType']>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (currentPerson) {
      setPositionType(currentPerson.positionType)
    }
  }, [currentPerson])

  const onSave = (data: BaseInputs) => {
    if (!currentPerson) return

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
    console.log(positionType)
    if (data.positionType === 'cb' && isCbDataEnough) {
      const cbPerson: Omit<CB_Person, 'id'> = {
        ...rest,
        dateOfBirth: data.dateOfBirth.toDate(),
        positionType: 'cb',
        name,
        period: { part, year: year.toDate() },
      }
      updatePerson({
        db,
        person: {
          id: currentPerson.id,
          data: cbPerson
        }
      })
        .then(() => {
          toast.success('Harby gullukçy baradaky maglumatlar üýtgedildi')
          dispatch(personsActions.update({ id: currentPerson.id, changes: cbPerson }))
          dispatch(personsActions.updateCurrentPerson({id: currentPerson.id, ...cbPerson}))
        })
        .catch(() => {
          toast.error(ERROR_DEFAULT)
        })
        .finally(() => {
          setIsLoading(false)
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
      updatePerson({
        db,
        person: {
          id: currentPerson.id,
          data: bgPerson
        }
      })
        .then(() => {
          toast.success('Harby gullukçy baradaky maglumatlar üýtgedildi')
            dispatch(personsActions.update({ id: currentPerson.id, changes: bgPerson }))
            dispatch(personsActions.updateCurrentPerson({id: currentPerson.id, ...bgPerson}))
        })
        .catch(() => {
          toast.error(ERROR_DEFAULT)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  if (!currentPerson) return null

  return (
    <Form
      form={form}
      name='update-person'
      initialValues={{
        firstName: currentPerson?.name.firstName,
        lastName: currentPerson?.name.lastName,
        patronymic: currentPerson?.name.patronymic,
        dateOfBirth: dayjs(currentPerson?.dateOfBirth),
        region: currentPerson?.region,
        positionType: currentPerson?.positionType,
        rank: ranks[currentPerson?.rank ?? 'hcy'],
        // @ts-ignore
        part: currentPerson?.period?.part,
        // @ts-ignore
        year: dayjs(currentPerson?.period?.year),
        // @ts-ignore
        dateOfEnlistment: dayjs(currentPerson?.dateOfEnlistment)
      }}
      onFinish={onSave}
    >
      <Flex gap={10} vertical>
        <Form.Item style={{ marginBottom: 0 }} labelCol={{ span: 24 }} label='Ady' name={'firstName'}>
          <Input
            size='large'
          />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }} labelCol={{ span: 24 }} label='Familiýasy' name={'lastName'}>
          <Input
            size='large'
          />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          label='Atasynyň ady'
          name={'patronymic'}
        >
          <Input
            size='large'
          />
        </Form.Item>
        {
          positionType && (
            <Form.Item
              label='Harby ady'
              labelCol={{ span: 24 }}
              style={{ marginBottom: 0 }}
              name={'rank'}
            >
              <Select
                size='large'
                options={ranksArray.filter(rank => rank.positionType === positionType).map(rank => ({ value: rank.value, label: rank.label }))}
                placeholder='Harby ady'
              />
            </Form.Item>
          )
        }
        <Form.Item
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          label='Welaýaty'
          name={'region'}
        >
          <Select
            size={'large'}

            options={regions.map(region => ({ value: region.value, label: region.label }))}
            placeholder='Welaýaty'
          />
        </Form.Item>

        <Form.Item
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          label='Doglan güni'
          name={'dateOfBirth'}
        >
          <DatePicker
            size={'large'}
            style={{ width: '100%' }}
            placeholder="Doglan güni"
            format={'DD.MM.YYYY'}
          />
        </Form.Item>
        <Form.Item
          label='Gullugyň görnüşi'
          labelCol={{ span: 24 }}
          style={{ marginBottom: 0 }}
          name={'positionType'}
        >
          <Select
            size='large'
            onSelect={e => setPositionType(e)}
            options={[{ value: 'cb', label: 'Çagyryş boýunça harby gullukçy' }, { value: 'bg', label: 'Borçnama boýunça harby gullukçy' }]}
            placeholder="Çagyryş boýunça ýa-da borçnama boýunça harby gullukçy"
          />
        </Form.Item>

        {positionType === 'bg' && <PersonBgInfo />}
        {positionType === 'cb' && <PersonCbInfo />}

        <Flex gap={10} justify={'end'}>
          <Button
            size='large'
            color={'green'}
            variant={'solid'}
            htmlType='submit'
            loading={isLoading}
          >
            Ýatda sakla
          </Button>
          <DeletePersonButtonWithModal currentPerson={currentPerson} />
        </Flex>
      </Flex>
    </Form>

  )
}