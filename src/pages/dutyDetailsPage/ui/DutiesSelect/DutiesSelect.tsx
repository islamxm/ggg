import { Select, type SelectProps } from "antd"
import { dutiesArray } from "@entities/duty"
import type { FC } from "react"

const selectOptions = dutiesArray.map(duty => ({value: duty.value, label: duty.label}))

type Props = {
  value?: any
  onChange?: DefFunc
} & Pick<SelectProps, 'style'>

export const DutiesSelect:FC<Props> = ({
  value,
  onChange,
  style
}) => {

  return (
    <Select
      options={selectOptions}
      showSearch
      style={style}
      value={value}
      onChange={onChange}
      allowClear
      placeholder='Kalendarda görkezmek üçin tabşyryklary saýla'
      />
  )
}