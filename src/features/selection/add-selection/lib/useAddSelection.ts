import type { Selection, SelectionData } from "@entities/selection"
import { useSelector } from "@shared/hooks/useReduxStore"
import type { Dayjs } from 'dayjs'

export const useAddSelection = () => {
  const { fractions } = useSelector(s => s.fractionReducer)

  const getReadyToAddSelectionData = (options: {
    fractionId: number
    date: Dayjs
    data: Selection
  }) => {
    const { fractionId, date, data } = options
    const day = date.date()
    const index = fractions.findIndex(f => f.id === fractionId)
    const hasDay = fractions[index].selection[date.format('MM.YYYY')]?.find(f => f.day === day)

    let result:SelectionData = {}
    console.log(hasDay)
    if (hasDay) {
      
      result = {
        ...fractions[index].selection,
        [date.format('MM.YYYY')]: fractions[index].selection[date.format('MM.YYYY')].map(f => {
          if (f.day === day) {
            console.log([...f.selection, data])
            return ({
              ...f,
              selection: [...f.selection, data]
            })
          }
          return f
        })
      }
    } else {
      result = {
        ...fractions[index].selection,
        [date.format('MM.YYYY')]: [...fractions[index].selection[date.format('MM.YYYY')] ?? [], { day: day, selection: [data] }]
      }
    }
    return result
  }

  return {
    getReadyToAddSelectionData
  }

}