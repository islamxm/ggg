import type { DatePickerProps } from "antd"
import type { Fraction } from "@entities/fraction/@x/selection"
export type Deviation = '+' | '-'

// export type Selection = {
//   deviation: Deviation,
//   description?: string
// }

// export type DaySelection = {
//   day: number,
//   selection: Array<Selection>
// }

// export type SelectionData = Record<string, Array<DaySelection>>


export type Selection = {
  id: number
  date: Date
  fractionId: number
  deviation: Deviation
  description: string
}


export type SelectionsOfFraction = {
  fractionId: Fraction['id'],
  selections: Array<Selection>
} 