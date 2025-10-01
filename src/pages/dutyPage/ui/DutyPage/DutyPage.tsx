import { Flex, DatePicker, Button } from 'antd'
import { DutyItem } from '../DutyItem/DutyItem'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { PageTitle } from '@shared/ui/PageTitle'
import type { Duties } from '@shared/types/common'
import type { Duty, Person } from '@entities/person'
import { DutyListModal } from '../DutyListModal/DutyListModal'
import {nanoid} from 'nanoid'
import { updatePerson } from '@features/person/update-person'
import { db } from '@shared/config/dbConfig'
import { useDispatch, useSelector } from '@shared/hooks/useReduxStore'
import type { Dayjs } from 'dayjs';
import { toast } from 'sonner'
import { ERROR_DEFAULT } from '@shared/consts/errorMessages'
import type { DutyCreateType } from '@entities/duty'



export const DutyPage = () => {
  const dispatch = useDispatch()
  const {persons} = useSelector(s => s.personsReducer)
  const [date, setDate] = useState<Dayjs>()
  const [dutyList, setDutyList] = useState<Array<DutyCreateType>>([])
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const onAddDuty = (duties: Array<Duties>) => {
    setDutyList(s => ([...s, ...duties.map(duty => ({id: nanoid(), duty, person: undefined}))]))
  }

  const onDeleteDuty = (id: DutyCreateType['id']) => {
    setDutyList(s => s.filter(d => d.id !== id))
  }

  const onPersonSelect = (dutyId: any, person?: Person) => {
    setDutyList(s => s.map(d => {
      if(d.id === dutyId) {
        return ({
          ...d,
          person
        })
      }
      return d
    }))
  }


  const onSave = () => {
    if(date) {
      setIsLoading(true)
      const duties = dutyList.filter(f => f.person)

      let updates: Array<Promise<any>> = []
  
      duties.forEach(duty => {
        const person = persons.find(p => p.id === duty.person?.id)
        if(person) {
          const oldDuties: Duty[] = person?.duties || []
          const newDuty: Duty = {
            date: date.toDate(),
            dutyId: duty.duty
          }
          const duties = [...oldDuties, newDuty]
    
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
      }).catch(_ => toast.error(ERROR_DEFAULT)).finally(() => {
        setIsLoading(false)
        onReset()
      })
    }
  }

  const onReset = () => {
    setDate(undefined)
    setDutyList([])
  }

  const onCopy = () => {
    
  }

  return (
    <Flex gap={20} vertical>
      <DutyListModal
        open={open}
        onCancel={() => setOpen(false)}
        onAddDuty={onAddDuty}/>
      <PageTitle
        hintContent={`Bu sahypada siz täze tabşyryklary döredip bilersiňiz. Gündelik tabşyrygy düzmek üçin tabşyrygyň senesini saýlamaly, soňra bolsa aşakdaky düwmeleriň kömegi bilen tabşyrygyň görnüşini we şol tabşyryga bellenýän adamy saýlamaly. Tabşyryklar düzülenden soňra "Ýatda sakla" düwmesine basmaly`}
      >Tabşyryklar</PageTitle>
      <DatePicker
        value={date}
        onChange={setDate}
        size='large'
        placeholder='Tabşyryklaryň senesini saýla'
      />
      <Flex align='center' vertical gap={10}>
        {
          dutyList.map(dutyItem => (
            <DutyItem
              key={dutyItem.id}
              id={dutyItem.id} 
              duty={dutyItem.duty} 
              person={dutyItem.person}
              onDelete={onDeleteDuty}
              onPersonSelect={onPersonSelect}
              />
          ))
        }
        <Flex gap={10}>
          <Button
            onClick={onSave}
            loading={isLoading}
            variant={'solid'}
            color={'green'}
          >
            Ýatda sakla
          </Button>
          <Button
            onClick={() => setOpen(true)}
            size={'large'}
            color={'primary'}
            variant={'solid'}>
            <PlusOutlined />
            Tabşyrygy goş
          </Button>
        </Flex>
      </Flex>
    </Flex>
  )
}