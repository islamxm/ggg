import { getFullName, type Person } from "@entities/person";
import type { TablePersonDataType } from "../model/types";

export const personsMap = (person: Person): TablePersonDataType  => {
  return ({
    id: person.id,
    rank: person.rank,
    name: getFullName(person.name)
  })
} 