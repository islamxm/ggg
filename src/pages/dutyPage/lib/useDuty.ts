import { getDutyDataKeyFromDate, type Duties, type DutyCreateType } from "@entities/duty"
import { getFullName, type Person } from "@entities/person"
import { updatePerson } from "@features/person/update-person"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import { useDispatch, useSelector } from "@shared/hooks/useReduxStore"
import dayjs, { Dayjs } from "dayjs"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { db } from "@shared/config/dbConfig"
import { useNavigate } from "react-router"
import type { DutyItem } from "@entities/duty"

export const useDuty = () => {
  const dispatch = useDispatch()
  const { persons } = useSelector(s => s.personsReducer)
  const navigate = useNavigate()
  const [dutyList, setDutyList] = useState<Array<DutyCreateType>>([])
  const [date, setDate] = useState<Dayjs>()
  const [isLoading, setIsLoading] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [copied, setCopied] = useState<Omit<DutyCreateType, 'id'>>()

  useEffect(() => {
    setIsDisabled(dutyList.length === 0 || !date ? true : false)
  }, [date, dutyList])

  const onAddDuty = (duties: Array<Duties>) => setDutyList(s => ([...s, ...duties.map(duty => ({ id: nanoid(), duty, person: undefined }))]))

  const onDeleteDuty = (id: DutyCreateType['id']) => setDutyList(s => s.filter(d => d.id !== id))

  const onPersonSelect = (dutyId: any, person?: Person) => {
    setDutyList(s => s.map(d => {
      if (d.id === dutyId) {
        return ({
          ...d,
          person
        })
      }
      return d
    }))
  }

  const onSaveDutyList = () => {
    if (!date) return

    setIsLoading(true)

    const monthAndYear = getDutyDataKeyFromDate(date)

    const duties = dutyList.filter(f => f.person)

    let updates: Array<Promise<any>> = []

    duties.forEach(duty => {
      const person = persons.find(p => p.id === duty.person?.id)

      if (person) {
        const newDuty: DutyItem = {
          date: date.toDate(),
          dutyType: duty.duty
        }

        let duties = { ...person.duties }
        let targetMonth = duties[monthAndYear] || []

        if (targetMonth.find(d => dayjs(d.date).date() === date.date())) {
          console.log('Error duty')
          toast.error(`${date.format('DD.MM.YYYY')} - ${getFullName(person.name, person.rank, true)} tabşyryga bellenen`)
          return
        }

        targetMonth = [...targetMonth || [], newDuty]
        duties[monthAndYear] = targetMonth

        updates.push(updatePerson({
          db,
          dispatch,
          person: {
            id: duty.person?.id || 1,
            data: {
              ...person,
              duties
            }
          }
        }))
      }
    })

    Promise.all(updates).then(() => {
      toast.success('Täze tabşyryklar goşuldy')
      _onReset()
    }).catch(_ => toast.error(ERROR_DEFAULT)).finally(() => {
      setIsLoading(false)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  const _onReset = () => {
    setDate(undefined)
    setCopied(undefined)
    setDutyList([])
  }

  const onCopy = (data: Omit<DutyCreateType, 'id'>) => {
    setCopied(data)
    toast.info('Tabşyryk göçürildi')
  }

  const _onPaste = (e: KeyboardEvent) => {
    if (!copied) return
    if (e.ctrlKey && e.key === 'v') {
      e.preventDefault()
      setDutyList(s => ([...s, { ...copied, id: nanoid() }]))
      toast.info('Göçürilen tabşyryk goýuldy')
    }
  }

  const onCancel = () => {
    _onReset()
    navigate(-1)
  }

  useEffect(() => {
    document.addEventListener('keydown', _onPaste)
    return () => {
      document.removeEventListener('keydown', _onPaste)
    }
  }, [copied])
  

  return {
    date,
    isLoading,
    isDisabled,
    dutyList,

    setDate,
    onAddDuty,
    onPersonSelect,
    onDeleteDuty,
    onSaveDutyList,
    onCopy,
    onCancel
  }
}