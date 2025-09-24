import type { CB_Person } from "@entities/person/model"
import {
  Flex,
  Select,
  DatePicker,
  Form
} from "antd"
import type { FC } from "react"

type Props = {
  period?: CB_Person['period']
  onChange?: (...args: any[]) => any
}

export const CbPersonForm: FC<Props> = () => {

  return (
    <Flex vertical gap={10}>
      <Form.Item
        style={{ margin: 0 }}
        name={'year'}
      >
        <DatePicker
          style={{width: '100%'}}
          placeholder='Çagyrylan ýyly'
          picker={'year'} />
      </Form.Item>
      <Form.Item
        style={{ margin: 0 }}
        name={'part'}
      >
        <Select
          placeholder='Çagyrylan möwsümi'
          options={[{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }]} />
      </Form.Item>

    </Flex>
  )
}