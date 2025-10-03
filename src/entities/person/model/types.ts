import type { CBPeriodPart, Ranks, Regions } from "@shared/types/common"
import type { DutiesData } from '@entities/duty/@x/person'

export type Achieve = {
  date: Date,
  achieveId: number,
}

export type PersonBase = {
  id: number,
  name: {
    firstName: string,
    lastName: string,
    patronymic: string
  },
  rank: Ranks,
  region: Regions,
  dateOfBirth: Date,

  duties: DutiesData,
  achieves: Array<Achieve>,
}

export type CB_Person = PersonBase & {
  positionType: 'cb'
  period?: { year: number, part: CBPeriodPart },
}

export type BG_Person = PersonBase & {
  positionType: 'bg',
  dateOfEnlistment?: Date
  phone?: string
  adress?: string
}

export type Person = CB_Person | BG_Person


