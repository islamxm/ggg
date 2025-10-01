import { Select, type SelectProps } from "antd"
import { dutiesArray, type Duties } from "@entities/duty"
import { useEffect, useState, type FC } from "react"

const selectOptions: SelectProps['options'] = [{value: 'all', label: 'Hemmesi'}, ...dutiesArray.map(duty => ({value: duty.value, label: duty.label}))]

type Props = {
  value?: Array<unknown>
  onChange?: (value: unknown) => void
} & Pick<SelectProps, 'style'>

export const DutiesSelect:FC<Props> = ({
  value,
  onChange,
  style
}) => {

  return (
    <Select
      options={selectOptions}
      mode='multiple'
      style={style}
      placeholder='Kalendarda görkezmek üçin tabşyryklary saýla'
      />
  )
}