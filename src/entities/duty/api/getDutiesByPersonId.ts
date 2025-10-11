import type { DBType } from "@shared/config/dbConfig"
import type { Person } from "@entities/person/@x/duty"

type Options = {
  db: DBType
  personId: Person['id']
}

export const getDutiesByPersonId = async ({
  db,
  personId,
}: Options) => {
  return await db.persons
    .where('id')
    .equals(personId)
    .toArray()
  
}