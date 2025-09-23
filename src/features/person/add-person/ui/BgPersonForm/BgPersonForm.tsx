import {
  Input,
  Flex,
  DatePicker
} from "antd"
import type { FC } from "react"

type Props = {

}

export const BgPersonForm:FC<Props> = () => {
  return (
    <Flex vertical gap={10}>
      <DatePicker placeholder='Haçandan bäri harby gullukda'/>
      <Input addonBefore={'Tel. nomeri'} placeholder="+993 00 000000"/>
      <Input addonBefore={'Adresi'} placeholder="Ýaşaýan ýeri"/>
    </Flex>
  )
}