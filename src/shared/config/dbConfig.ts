import Dexie, { type EntityTable } from 'dexie';
import { type Person } from '@entities/person/model'
import { type DefaultListElement, type Regions } from '@shared/types/common';

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
  >
}


db.version(1).stores({
  persons: '++id',
  dutyPositions: '++id',
  recruitRegions: '++id'
})

export type DBType = typeof db