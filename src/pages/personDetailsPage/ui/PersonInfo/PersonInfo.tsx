import { Form, Input, Flex, Select, DatePicker, Button } from 'antd'
import type { Ranks, Regions, PositionTypes } from '@shared/types/common'
import type { BG_Person, Person } from '@entities/person'
import { useEffect, useState } from 'react'
import { useSelector } from '@shared/hooks/useReduxStore'
import { regions } from '@shared/consts/regions'
import { ranks, ranksArray } from '@shared/consts/ranks'
import { DeletePersonButtonWithModal } from '@features/person/delete-person/ui/DeletePersonButtonWithModal/DeletePersonButtonWithModal'

type BaseInputs = {
  firstName: string,
  lastName: string,
  patronymic: string,
  rank: Ranks
  region: Regions
  dateOfBirth: any
  positionType: PositionTypes

  part?: 'I' | 'II'
  year?: number

  dateOfEnlistment?: BG_Person['dateOfEnlistment']
  phone?: string,
  adress?: string
}

export const PersonInfo = () => {
  const { currentPerson } = useSelector(s => s.personsReducer)
  const [form] = Form.useForm<BaseInputs>()
  const [positionType, setPositionType] = useState<Person['positionType']>()

  useEffect(() => {
    if (currentPerson) setPositionType(currentPerson.positionType)
  }, [currentPerson])

  const setDefaultData: Person | undefined = () => {
    
  }

  return (
    <Form
      form={form}
      name='update-person'
      initialValues={{
        firstName: currentPerson?.name.firstName,
        lastName: currentPerson?.name.lastName,
        patronymic: currentPerson?.name.patronymic,
        // dateOfBirth: currentPerson?.dateOfBirth,
        region: currentPerson?.region,
        positionType: currentPerson?.positionType,
        rank: ranks[currentPerson?.rank ?? 'hcy']
      }}
    >
      <Flex gap={10} vertical>
        <Form.Item style={{ marginBottom: 0 }} labelCol={{ span: 24 }} label='Ady' name={'firstName'}>
          <Input size='large' defaultValue={form.getFieldValue('firstName')} />
        </Form.Item>
        <Form.Item style={{ marginBottom: 0 }} labelCol={{ span: 24 }} label='Familiýasy' name={'lastName'}>
          <Input size='large' defaultValue={form.getFieldValue('lastName')} />
        </Form.Item>
        <Form.Item
          style={{ marginBottom: 0 }}
          labelCol={{ span: 24 }}
          label='Atasynyň ady'
          name={'patronymic'}
        >
          <Input size='large' defaultValue={form.getFieldValue('patronymic')} />
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

        {positionType === 'bg' && null}
        {positionType === 'cb' && null}

        <Flex gap={10} justify={'end'}>
          <Button
            size='large'
            color={'green'}
            variant={'solid'}
          >
            Ýatda sakla
          </Button>
          {/* <Button
            size='large'
            color={'danger'}
            variant={'outlined'}
          >
            Bes set
          </Button> */}
          <DeletePersonButtonWithModal currentPerson={currentPerson} />
        </Flex>
      </Flex>
    </Form>

  )
}