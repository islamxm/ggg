import type { DBType } from "@shared/config/dbConfig";
import type { Person } from "@entities/person";

type Options = {
  db: DBType
  personId: Person['id']
}

export const deletePerson = async ({
  db,
  personId,
}: Options) => await db.persons.delete(personId)