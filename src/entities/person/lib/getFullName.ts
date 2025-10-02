import type { Person } from "../model/types";
import { ranks } from "@shared/consts/ranks";

export const getFullName = (name: Person['name'], rank: Person['rank'], isShort?: boolean) => {
  if(isShort) {
    return `${ranks[rank].short} ${name.firstName[0]} ${name.lastName}`
  }
  return `${ranks[rank].short}.${name.lastName} ${name.firstName}.${name.patronymic}`
}