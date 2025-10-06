import type { DateMode } from '@shared/types/common'
import { Dayjs } from 'dayjs'

export const getDateRange = (date: Dayjs, type: DateMode) => {
  const start = date.startOf(type).toDate()
  const end = date.endOf(type).toDate()
  return [start, end]
}