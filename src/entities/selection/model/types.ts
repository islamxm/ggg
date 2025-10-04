export type Deviation = '+' | '-'

export type Selection = {
  deviation: Deviation,
  description?: string
}

export type DaySelection = {
  day: number,
  selection: Array<Selection>
}

// первый тип в Record это число в формате MM.YYYY
export type SelectionData = Record<string, Array<DaySelection>>