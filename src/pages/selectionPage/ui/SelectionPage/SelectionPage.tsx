import { PageTitle } from "@shared/ui/PageTitle"
import { Flex } from "antd"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { SelectionTable } from "../SelectionTable/SelectionTable"
import { SelectionDate } from "../SelectionDate/SelectionDate"
import { useEffect, useState } from "react"
import dayjs from "dayjs"
import type { DateType } from "@pages/selectionPage/model/types"
import { db } from "@shared/config/dbConfig"
import { selectionActions } from "@entities/selection"
import { selectAllFractions } from "@entities/fraction"
import { getSelectionsFromFractionAndDate } from "@entities/selection/api/getSelectionsFromFractionAndDate"
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { selectCurrentSelection } from "@entities/selection/model/selectionSlice"

export const SelectionPage = () => {
  const dispatch = useDispatch()
  const fractions = useSelector(selectAllFractions)
  const data = useSelector(selectCurrentSelection)
  const [dateValue, setDateValue] = useState<DateType>({
    date: dayjs(new Date()),
    mode: 'month'
  })

  useEffect(() => {
    const { date, mode } = dateValue
    if (fractions.length === 0) return

    if (mode === 'month') {

      Promise.all(fractions.map(fraction => getSelectionsFromFractionAndDate({
        db,
        data: {
          dateMode: mode,
          date,
          fractionId: fraction.id
        }
      })))
        .then((res) => {
          dispatch(selectionActions.updateCurrentSelection(res))
        })
        .catch(() => {
          toast.error(ERROR_DEFAULT)
        })
    }
    // if (mode === 'year') {

    // }
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