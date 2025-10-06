import { type Person } from "@entities/person"
import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
  personData: Omit<Person, 'id'>
}

export const addPerson = async ({
  db,
  personData,
}: Options) => await db.persons.add(personData)
