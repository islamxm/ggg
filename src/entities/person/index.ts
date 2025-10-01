export {
  personsReducer,
  personsActions
} from "./model/personsSlice";

export type { 
  Duty,
  Achieve,
  PersonBase,
  CB_Person,
  BG_Person,
  Person
} from "./model/types";

export { useGetPersonIdFromParams } from "./lib/useGetPersonIdFromParams";
export { getFullName } from "./lib/getFullName";
export { PersonCard } from "./ui/PersonCard/PersonCard";
export { PersonTitle } from "./ui/PersonTitle/PersonTitle";

