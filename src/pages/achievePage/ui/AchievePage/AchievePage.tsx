import { getPerson, personsActions, selectCurrentPerson, useGetPersonIdFromParams } from '@entities/person'
import { PageTitle } from '@shared/ui/PageTitle'
import { Flex, type CalendarMode } from 'antd'
import { useEffect, useState } from 'react'
import { PersonTitle } from '@entities/person'
import { db } from '@shared/config/dbConfig'
import { useDispatch, useSelector } from '@shared/hooks/useReduxStore'
import { AchieveCalendar } from '../AchieveCalendar/AchieveCalendar'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { achieveActions, getAchievesByPersonAndDate } from '@entities/achieve'
import { AddAchieveButton } from '@features/achieve/add-achieve'
import { selectAllAchieves } from '@entities/achieve/model/achieveSlice'

export const AchievePage = () => {
  const dispatch = useDispatch()
  const personId = useGetPersonIdFromParams()
  const currentPerson = useSelector(selectCurrentPerson)
  const achieves = useSelector(selectAllAchieves) 
  const [date, setDate] = useState<Dayjs>(dayjs())
  const [mode, setMode] = useState<CalendarMode>('month')


  useEffect(() => {
    if (!personId) return
    getPerson({
      db,
      personId: Number(personId)
    }).then(person => {
      dispatch(personsActions.updateCurrentPerson(person))
    })
  }, [personId])

  useEffect(() => {
    if(date && currentPerson) {
      getAchievesByPersonAndDate({
        db,
        data: {
          personId: currentPerson.id,
          dateMode: mode,
          date
        }
      }).then((res) => {
        dispatch(achieveActions.init(res.achieves))
      })
    }
  }, [date, currentPerson, mode])


  if (!currentPerson) return null

  return (
    <Flex vertical gap={20}>
      <PageTitle>Höweslendirmeler</PageTitle>
      <PersonTitle name={currentPerson.name} rank={currentPerson.rank} />
      <Flex justify={'flex-end'}>
        <AddAchieveButton/>
      </Flex>
      <AchieveCalendar 
        mode={mode}
        onModeChange={setMode}
        data={achieves}
        value={date}
        onChange={setDate}
        />
    </Flex>
  )
}