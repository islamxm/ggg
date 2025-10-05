import { PageTitle } from "@shared/ui/PageTitle"
import { Flex } from "antd"
import { useSelector } from "@shared/hooks/useReduxStore"
import { SelectionTable } from "../SelectionTable/SelectionTable"
import { SelectionDate } from "../SelectionDate/SelectionDate"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import type { DateType, SelectionTableDataType } from "@pages/selectionPage/model/types"

export const SelectionPage = () => {
  const { fractions } = useSelector(s => s.fractionReducer)
  const [data, setData] = useState<SelectionTableDataType>([])
  const [dateValue, setDateValue] = useState<DateType>({
    date: dayjs(new Date()),
    mode: 'month'
  })

  useEffect(() => {
    const { date, mode } = dateValue

    if (fractions.length === 0) return

    if (mode === 'month') {
      const fracWithCurrentMonthSelections = fractions.map(fraction => ({
        ...fraction,
        selection: fraction.selection[date.format('MM.YYYY')] || []
      }))
      setData(fracWithCurrentMonthSelections)
    }

    if (mode === 'year') {
      const fracWithCurrentYearSelections = fractions.map(fraction => ({
        ...fraction,
        selection: Object.entries(fraction.selection)
          .filter(([selectionDate]) => selectionDate.includes(dayjs(date).format('YYYY')))
          .map(([_, v]) => v).flat()
      }))
      setData(fracWithCurrentYearSelections)
    }

  }, [dateValue, fractions])

  return (
    <Flex vertical gap={20}>
      <Flex gap={5} justify={'space-between'} align={'center'}>
        <PageTitle hintContent='Seljermeler sahypasy'>Seljerme</PageTitle>
        <SelectionDate
          date={dateValue}
          onDateChange={setDateValue}
        />
      </Flex>
      <SelectionTable
        data={data}
        date={dateValue}
      />
    </Flex>
  )
}