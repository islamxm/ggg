import Dexie, { type EntityTable } from 'dexie';
import { type Person } from '@entities/person'
import { type DefaultListElement, type Regions } from '@shared/types/common';
import type { Fraction } from '@entities/fraction';

export const db = new Dexie('gg') as Dexie & {
  persons: EntityTable<
    Person,
    'id'
  >,
  dutyPositions: EntityTable<
    DefaultListElement,
    'id'
  >,
  recruitRegions: EntityTable<
    DefaultListElement & {region: Regions},
    'id'
  >,
  fractions: EntityTable<
    Fraction,
    'id'
  >
}


db.version(1).stores({
  persons: '++id, name.firstName, name.lastName, name.patronymic',
  dutyPositions: '++id',
  recruitRegions: '++id',
  fractions: '++id'
})

export type DBType = typeof db