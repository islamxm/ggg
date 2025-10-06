import type { SelectionDateMode } from "../model/types";
import { Dayjs } from 'dayjs'

export const getDateRange = (date: Dayjs, type: SelectionDateMode) => {
  const start = date.startOf(type).toDate()
  const end = date.endOf(type).toDate()
  return [start, end]
}