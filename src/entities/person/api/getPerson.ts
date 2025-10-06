import { type Person } from "@entities/person"
import type { DBType } from "@shared/config/dbConfig"

type Options = {
  db: DBType
  personId: Person['id']
}

export const getPerson = async ({
  db,
  personId,
}: Options) => await db.persons.get(personId)

