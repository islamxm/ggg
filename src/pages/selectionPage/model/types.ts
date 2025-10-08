import type { DateMode } from '@shared/types/common'
import type {Dayjs} from 'dayjs'

export type DateType = {
  date: Dayjs,
  mode: DateMode
}
