import type { DBType } from "@shared/config/dbConfig";

type Options = {
  db: DBType
}

export const getAllPersons = async ({ db }: Options) => await db.persons.toArray()
