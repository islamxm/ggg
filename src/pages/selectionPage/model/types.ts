import type { SelectionDateMode } from '@entities/selection'
import type {Dayjs} from 'dayjs'

export type DateType = {
  date: Dayjs,
  mode: SelectionDateMode
}
