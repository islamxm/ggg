import {
  Flex,
  Select,
  DatePicker
} from "antd"
import type { FC } from "react"

type Props = {

}

export const CbPersonForm:FC<Props> = () => {
  return (
    <Flex vertical gap={10}>
      <DatePicker placeholder='Çagyrylan ýyly' picker={'year'}/>
      <Select placeholder='Çagyrylan möwsümi' options={[{value: 'I', label: 'I'},{value: 'I', label: 'II'}]}/>
    </Flex>
  )
}