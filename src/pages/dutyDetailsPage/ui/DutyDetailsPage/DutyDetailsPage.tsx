import { PersonTitle, useGetPersonIdFromParams } from "@entities/person"
import { Flex } from "antd"
import { useEffect, useState } from "react"
import { personsActions } from "@entities/person"
import { getPerson } from "@features/person/get-person"
import { db } from "@shared/config/dbConfig"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { toast } from "sonner"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { DutiesSelect } from "../DutiesSelect/DutiesSelect"
import type { Duties, DutyItem } from "@entities/duty"
import { DutiesCalendar } from "../DutiesCalendar/DutiesCalendar"
import dayjs from 'dayjs'
import type { CalendarMode } from "antd"

export const DutyDetailsPage = () => {
  const id = useGetPersonIdFromParams()
  const dispatch = useDispatch()
  const { currentPerson } = useSelector(s => s.personsReducer)
  const [selectedDuties, setSelectedDuties] = useState<Duties>()
  const [date, setDate] = useState<string>(dayjs().format('MM.YYYY'))
  const [mode, setMode] = useState<CalendarMode>('month')
  const [data, setData] = useState<Array<DutyItem>>([])

  useEffect(() => {
    if (id) {
      getPerson({
        db,
        personId: Number(id),
        onSuccess(person) {
          dispatch(personsActions.updateCurrentPerson(person))
        },
        onError() {
          toast.error(ERROR_DEFAULT)
        },
      })
    }
    return () => {
      dispatch(personsActions.updateCurrentPerson(undefined))
    }
  }, [id])

  useEffect(() => {
    if (date && currentPerson) {
      if (mode === 'month') {
        const d = currentPerson.duties[date] ?? []
        if (selectedDuties) {
          setData(d.filter(p => p.dutyType === selectedDuties))
        } else {
          setData(d)
        }
      } 
      if(mode === 'year') {
        const d = Object.entries(currentPerson.duties)
        const year = date.slice(3, date.length)
        const dd = d.filter(([y, d]) => y.slice(3, y.length) === year).map(([y, d]) => d).flat()
        setData(dd)
      }
    }
  }, [date, selectedDuties, currentPerson, mode])

  if (!currentPerson) return null

  return (
    <Flex vertical gap={20}>
      <PersonTitle rank={currentPerson.rank} name={currentPerson.name} />
      <DutiesSelect value={selectedDuties} onChange={setSelectedDuties} />
      <DutiesCalendar
        mode={mode}
        onModeChange={setMode}
        data={data}
        value={dayjs(date, 'MM.YYYY')}
        onChange={setDate}
      />
    </Flex>
  )
}