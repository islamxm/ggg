import { DatePicker, Flex, Form, Select } from "antd"

export const PersonCbInfo = () => {

  return (
    <Flex vertical gap={10}>
      <Form.Item
        style={{ margin: 0 }}
        name={'year'}
        label='Çagyrylan ýyly'
        labelCol={{ span: 24 }}
      >
        <DatePicker
          style={{ width: '100%' }}
          placeholder='Çagyrylan ýyly'
          picker={'year'} />
      </Form.Item>
      <Form.Item
        style={{ margin: 0 }}
        name={'part'}
        label='Çagyrylan möwsümi'
        labelCol={{ span: 24 }}
      >
        <Select
          placeholder='Çagyrylan möwsümi'
          options={[{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }]} />
      </Form.Item>

    </Flex>
  )
}