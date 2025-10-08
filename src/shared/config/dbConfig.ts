import Dexie, { type EntityTable } from 'dexie';
import { type Person } from '@entities/person'
import { type DefaultListElement, type Regions } from '@shared/types/common';
import type { Fraction } from '@entities/fraction';
import type { Selection } from '@entities/selection';
import type { Duty } from '@entities/duty';
import type { Achieve } from '@entities/achieve';

export const db = new Dexie('gg') as Dexie & {
  persons: EntityTable<
    Person,
    'id'
  >,
  recruitRegions: EntityTable<
    DefaultListElement & {region: Regions},
    'id'
  >,
  fractions: EntityTable<
    Fraction,
    'id'
  >,
  selections: EntityTable<
    Selection,
    'id'
  >,
  duties: EntityTable<
    Duty,
    'id'
  >,
  achieves: EntityTable<
    Achieve,
    'id'
  >
}

db.version(1).stores({
  persons: '++id, name.firstName, name.lastName, name.patronymic',
  recruitRegions: '++id',
  fractions: '++id',
  selections: '++id, date, fractionId',
  duties: '++id, date, dutyType, personId',
  achieves: '++id, date, achieveType, personId'
})

export type DBType = typeof db