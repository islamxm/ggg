import {
  Input,
  Flex,
  DatePicker,
  Form
} from "antd"
import type { FC } from "react"


export const BgPersonForm: FC = () => {
  return (
    <Flex vertical gap={10}>
      <Form.Item
        style={{ margin: 0 }}
        name={'dateOfEnlistment'}
      >
        <DatePicker
          style={{width: '100%'}}
          placeholder='Haçandan bäri harby gullukda'
        />
      </Form.Item>
      <Form.Item
        style={{ margin: 0 }}
        name={'phone'}
      >
        <Input
          addonBefore={'Tel. nomeri'}
          placeholder="+993 00 000000" />
      </Form.Item>
      <Form.Item
        style={{ margin: 0 }}
        name={'adress'}
      >
        <Input
          addonBefore={'Adresi'} placeholder="Ýaşaýan ýeri" />
      </Form.Item>
    </Flex>
  )
}