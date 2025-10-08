import {
  Flex,
  Select,
  DatePicker,
  Form
} from "antd"

const requiredField = {
  rules: [{ required: true, message: 'Hökman doldurylmaly meýdan' }]
}
export const CbPersonForm = () => {

  return (
    <Flex vertical gap={10}>
      <Form.Item
        style={{ margin: 0 }}
        name={'year'}
        {...requiredField}
      >
        <DatePicker
          style={{width: '100%'}}
          placeholder='Çagyrylan ýyly'
          picker={'year'} />
      </Form.Item>
      <Form.Item
        style={{ margin: 0 }}
        name={'part'}
        {...requiredField}
      >
        <Select
          placeholder='Çagyrylan möwsümi'
          options={[{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }]} />
      </Form.Item>

    </Flex>
  )
}