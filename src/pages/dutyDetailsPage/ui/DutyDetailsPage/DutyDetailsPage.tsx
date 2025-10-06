import { PersonTitle, useGetPersonIdFromParams } from "@entities/person"
import { personsActions } from "@entities/person"
import { Flex } from "antd"
import { useEffect, useState } from "react"
import { db } from "@shared/config/dbConfig"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { toast } from "sonner"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import { DutiesSelect } from "../DutiesSelect/DutiesSelect"
import { getDutiesByPersonAndDate, type Duties, type Duty } from "@entities/duty"
import { DutiesCalendar } from "../DutiesCalendar/DutiesCalendar"
import dayjs, { Dayjs } from 'dayjs'
import type { CalendarMode } from "antd"
import { getPerson } from "@entities/person"

export const DutyDetailsPage = () => {
  const id = useGetPersonIdFromParams()
  const dispatch = useDispatch()
  const { currentPerson } = useSelector(s => s.personsReducer)
  const [selectedDuties, setSelectedDuties] = useState<Duties>()
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [mode, setMode] = useState<CalendarMode>('month')
  const [data, setData] = useState<Array<Duty>>([])

  useEffect(() => {
    if (id) {
      getPerson({
        db,
        personId: Number(id),
      })
        .then(person => dispatch(personsActions.updateCurrentPerson(person)))
        .catch(() => toast.error(ERROR_DEFAULT))
    }
    return () => {
      dispatch(personsActions.updateCurrentPerson(undefined))
    }
  }, [id])

  useEffect(() => {
    if (date && currentPerson) {
      getDutiesByPersonAndDate({
        db,
        data: {
          dateMode: mode,
          date,
          personId: currentPerson.id
        }
      })
        .then(res => {
          if (selectedDuties) {
            setData(res.duties.filter(duty => duty.dutyType === selectedDuties))
          } else setData(res.duties) 
          
        })
        .catch(() => {
          toast.error(ERROR_DEFAULT)
        })
    }
  }, [date, selectedDuties, currentPerson, mode])

  useEffect(() => console.log(data.map(d => d.dutyType)), [data])

  if (!currentPerson) return null

  return (
    <Flex vertical gap={20}>
      <PersonTitle rank={currentPerson.rank} name={currentPerson.name} />
      <DutiesSelect value={selectedDuties} onChange={setSelectedDuties} />
      <DutiesCalendar
        mode={mode}
        onModeChange={setMode}
        data={data}
        value={date}
        onChange={setDate}
      />
    </Flex>
  )
}