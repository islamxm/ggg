import type { Fraction } from '@entities/fraction'
import type { DaySelection } from '@entities/selection'
import type {Dayjs} from 'dayjs'

export type DateType = {
  date: Dayjs,
  mode: 'year' | 'month'
}

export type SelectionTableDataType = Array<Omit<Fraction, 'selection'> & {selection: Array<DaySelection>}>