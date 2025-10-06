import { PageTitle } from "@shared/ui/PageTitle"
import { Flex } from "antd"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { SelectionTable } from "../SelectionTable/SelectionTable"
import { SelectionDate } from "../SelectionDate/SelectionDate"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import type { DateType } from "@pages/selectionPage/model/types"
import { db } from "@shared/config/dbConfig"
import { addSelection } from "@entities/selection"
import { type Selection } from "@entities/selection"
import type { SelectionsOfFraction } from "@entities/selection"
import { selectAllFractions } from "@entities/fraction"

export const SelectionPage = () => {
  const dispatch = useDispatch()
  const fractions = useSelector(selectAllFractions)
  const [dateValue, setDateValue] = useState<DateType>({
    date: dayjs(new Date()),
    mode: 'month'
  })

  const [data, setData] = useState<Array<SelectionsOfFraction>>([])

  const getData = () => {
    const { date, mode } = dateValue
    if (fractions.length === 0) return

    if (mode === 'month') {
      // Promise.all(fractions.map(fraction => getSelectionsFromFractionAndDate({
      //   db,
      //   data: {
      //     dateMode: mode,
      //     date,
      //     fractionId: fraction.id
      //   }
      // })))
      //   .then((res) => {
      //     setData(res)
      //   })
    }
    if (mode === 'year') {

    }
  }

  useEffect(getData, [dateValue, fractions])

  const _addSelection = () => {
    const selection: Omit<Selection, 'id'> = {
      fractionId: 2,
      date: dayjs('10.01.2025').toDate(),
      deviation: '+',
      description: 'test test'
    }

    addSelection({
      db,
      selection
    })
      .then(r => console.log(r))
  }

  return (
    <Flex vertical gap={20}>
      <Flex gap={5} justify={'space-between'} align={'center'}>
        <PageTitle hintContent='Seljermeler sahypasy'>Seljerme</PageTitle>
        {/* <button onClick={_addSelection}>test add selection</button> */}
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