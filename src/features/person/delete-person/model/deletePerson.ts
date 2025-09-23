import type { Person } from "@entities/person/model";
import type { DBType } from "@shared/config/dbConfig";

export const deletePerson = async (db:DBType, personId:Person['id']) => await db.persons.delete(personId)