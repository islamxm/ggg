import { PageTitle } from "@shared/ui/PageTitle"
import { Flex } from "antd"
import { SelectionDetailsDate } from "../SelectionDetailsDate/SelectionDetailsDate"
import { useEffect, useState } from "react"
import dayjs, { Dayjs } from 'dayjs'
import { getFraction, useGetFractionIdFromParams, type Fraction } from "@entities/fraction"
import { useSelector } from "@shared/hooks/useReduxStore"
import { SelectionItem, selectSelectionDetailsDate, type Selection } from "@entities/selection"
import { getSelectionsFromFractionAndDate } from "@entities/selection/api/getSelectionsFromFractionAndDate"
import { db } from "@shared/config/dbConfig"
import { toast } from "sonner"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { DeleteSelectionIconButton } from "@features/selection/delete-selection"

export const SelectionDetailsPage = () => {
  const fractionId = useGetFractionIdFromParams()
  const selectionDetailsDate = useSelector(selectSelectionDetailsDate)
  const [date, setDate] = useState<Dayjs>()
  const [data, setData] = useState<Array<Selection>>([])
  const [fraction, setFraction] = useState<Fraction>()



  useEffect(() => {
    selectionDetailsDate && setDate(dayjs(selectionDetailsDate))
  }, [selectionDetailsDate])

  useEffect(() => {
    if (!fractionId || !date) return
    getFraction({
      db,
      fractionId: Number(fractionId)
    })
      .then(setFraction)
    getSelectionsFromFractionAndDate({
      db,
      data: {
        dateMode: 'day',
        date,
        fractionId: Number(fractionId)
      }
    }).then((res) => {
      setData(res.selections)
    }).catch(() => toast.error(ERROR_DEFAULT))

  }, [date, fractionId])

  const onDeleteSelection = (id: Selection['id']) => {
    setData(s => s.filter(s => s.id !== id))
  }

  return (
    <Flex vertical gap={20}>
      <PageTitle>{fraction?.label}</PageTitle>
      <SelectionDetailsDate
        value={date}
        onChange={setDate}
      />
      <Flex gap={5} vertical>
        {
          data.map(selection => (
            <SelectionItem
              actionSlot={
                <DeleteSelectionIconButton onDeleted={() => onDeleteSelection(selection.id)} selectionId={selection.id} />
              }
              {...selection} />
          ))
        }
      </Flex>
    </Flex>
  )
}