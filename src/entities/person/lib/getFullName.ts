import type { Person } from "../model/types";
import { ranks } from "@shared/consts/ranks";

export const getFullName = (name: Person['name'], rank?: Person['rank'], isShort?: boolean) => {
  if (isShort) {
    if (rank) {
      return `${ranks[rank].short} ${name.firstName[0]} ${name.lastName}`
    } else {
      return `${name.firstName[0]} ${name.lastName}`
    }
  }
  if (rank) {
    return `${ranks[rank].short}.${name.lastName} ${name.firstName}.${name.patronymic ?? ''}`

  } else {
    return `${name.lastName} ${name.firstName} ${name.patronymic ?? ''}`
  }
}