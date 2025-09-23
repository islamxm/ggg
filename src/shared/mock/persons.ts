import type { Person } from "../../entities/person/model";

export const persons: Array<Person> = [
  {
    id: 1,
    name: {
      firstName: 'Amanow',
      lastName: 'Aman',
      patronymic: 'Amanowiç'
    },
    rank: 'mr',
    region: 'AH',
    dateOfBirth: new Date('1985-10-10'),
    dateOfEnlistment: new Date('1991-05-05'),
    positionType: 'bg',
    phone: '+99363000000',
    adress: 'Gazak oba',
    data: {
      duties: [],
      achieves: []
    },
  },
  {
    id: 2,
    name: {
      firstName: 'Myrat',
      lastName: 'Myradow',
      patronymic: 'Myradowiç'
    },
    rank: 'bg_sna',
    region: 'MR',
    dateOfBirth: new Date('1995-01-02'),
    dateOfEnlistment: new Date('2013-11-16'),
    positionType: 'bg',
    phone: '+99363000000',
    adress: 'Gazak oba',
    data: {
      duties: [],
      achieves: []
    },
  },
  {
    id: 3,
    name: {
      firstName: 'Geldi',
      lastName: 'Geldiýew',
      patronymic: 'Geldiýewiç'
    },
    rank: 'hcy',
    region: 'DZ',
    dateOfBirth: new Date('2005-01-02'),
    positionType: 'cb',
    period: {
      year: 2023,
      part: 'II'
    },
    data: {
      duties: [],
      achieves: []
    },
  }
]