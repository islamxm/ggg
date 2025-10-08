import { DatePicker } from "antd"
import {Dayjs} from 'dayjs'
import type { FC } from "react"

type Props = {
  value?: Dayjs,
  onChange
}

export const SelectionDetailsDate:FC<Props> = ({
  value,
  onChange
}) => {

  return (
    <DatePicker
      value={value}
      onChange={onChange}
      placeholder="Seljermaniň gününi saýla"
      format={'DD.MM.YYYY'}
      />
  )
}