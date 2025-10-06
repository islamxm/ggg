import { Button, DatePicker, Flex, Tooltip } from "antd"
import { type FC } from "react"
import type { DateType } from "@pages/selectionPage/model/types"

type Props = {
  date: DateType
  onDateChange?: (date: DateType) => void,
}

export const SelectionDate: FC<Props> = ({
  onDateChange,
  date
}) => {

  return (
    <Flex gap={5}>
      <Tooltip title='*** Öçürilen' color={'gray'}>
        <Button
          disabled
          onClick={() => onDateChange?.({ date: date.date, mode: 'year' })}
          variant={date.mode === 'year' ? 'solid' : 'outlined'}
          color={'primary'}
        >
          Ýyl boýunça
        </Button>
      </Tooltip>
      <Button
        onClick={() => onDateChange?.({ date: date.date, mode: 'month' })}
        variant={date.mode === 'month' ? 'solid' : 'outlined'}
        color={'primary'}
      >
        Aý boýunça
      </Button>
      {
        date.mode === 'month' &&
        <DatePicker.MonthPicker
          onChange={(date) => onDateChange?.({ date, mode: 'month' })}
          value={date.date}
          placeholder="Aýyny saýla"
        />
      }
      {
        date.mode === 'year' &&
        <DatePicker.YearPicker
          onChange={(date) => onDateChange?.({ date, mode: 'year' })}
          value={date.date}
          placeholder="Ýylyny saýla"
        />
      }
    </Flex>

  )
}