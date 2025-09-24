import type { Person } from "@entities/person";
import type { TablePersonDataType } from "../model/types";
import { ranks } from "@shared/consts/ranks";

export const personsMap = (person: Person): TablePersonDataType  => {
  return ({
    id: person.id,
    rank: ranks[person.rank].label,
    name: `${person.name.lastName} ${person.name.firstName} ${person.name.patronymic}`
  })
} 