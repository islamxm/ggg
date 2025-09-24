import type { DBType } from "@shared/config/dbConfig";

export const getAllPersons = async (db: DBType) => await db.persons.toArray()