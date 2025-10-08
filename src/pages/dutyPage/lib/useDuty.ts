import { addDuties, type Duties, type DutyCreateType } from "@entities/duty"
import { type Person } from "@entities/person"
import { ERROR_DEFAULT } from "@shared/consts/errorMessages"
import  { Dayjs } from "dayjs"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { db } from "@shared/config/dbConfig"
import { useNavigate } from "react-router"
import type { Duty } from "@entities/duty"

export const useDuty = () => {
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
    const duties: Array<Omit<Duty, 'id'>> = dutyList.filter(f => f.person).map(duty => ({
      date: date.toDate(),
      // вот это место опасное, надо исправить
      personId: duty.person?.id || 0,
      dutyType: duty.duty
    }))

    addDuties({
      db,
      duties
    })
    .then(() => toast.success('Tabşyryklar ýüklendi'))
    .catch(() => toast.error(ERROR_DEFAULT))
    .finally(() => {
      setIsLoading(false)
      _onReset()
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