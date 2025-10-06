import type { CalendarMode, DatePickerProps } from "antd"
import type { ReactNode } from "react"

export type DefaultListElement = {
  id: number,
  label: string
}

export type Route = DefaultListElement & { path: string, icon: ReactNode }

export type Ranks =
  'hcy' |
  'k_snt' |
  'snt' |
  'u_snt' |
  'bg_k_snt' |
  'bg_snt' |
  'bg_u_snt' |
  'bg_sna' |
  'lnt' |
  'u_lnt' |
  'kn' |
  'mr' |
  'ppk' |
  'pk'

export type RanksRecord<ValueType> = Record<Ranks, ValueType>

export type Regions = 'AG' | 'AH' | 'MR' | 'LB' | 'DZ' | 'BN'

export type RegionsRecord<ValueType> = Record<Regions, ValueType>

export type PositionTypes = 'cb' | 'bg'

export type CBPeriodPart = 'I' | 'II'

export type CalendarModeType = CalendarMode | 'date'

export type Months =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'

export type DateMode = Extract<DatePickerProps['mode'], 'year' | 'month'>

