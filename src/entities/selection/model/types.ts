import type { Fraction } from "@entities/fraction/@x/selection"
export type Deviation = '+' | '-' | '--'

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