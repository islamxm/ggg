import type { PositionTypes, Ranks, Regions } from "../../shared/types/common"

type Duty = {
  date: Date,
  dutyId: number,
}

type Achieve = {
  date: Date,
  achieveId: number,
}

type PersonBase = {
  id: number,
  name: {
    firstName: string, 
    lastName: string, 
    patronymic: string
  },
  positionType: PositionTypes
  rank: Ranks
  region: Regions
  dateOfBirth: Date,

  data: {
    duties: Array<Duty>,
    achieves: Array<Achieve>,
  }
} 

export type CB_Person = PersonBase & {
  period: {year: number, part: 'I' | 'II'},
  positionType: 'cb'
}

export type BG_Person = PersonBase & {
  dateOfEnlistment: Date
  positionType: 'bg',
  phone: string
  adress: string
}

export type Person = CB_Person | BG_Person


