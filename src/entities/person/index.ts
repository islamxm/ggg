export {
  personsReducer,
  personsActions
} from "./model/personsSlice";

export type { 
  PersonBase,
  CB_Person,
  BG_Person,
  Person
} from "./model/types";

export { useGetPersonIdFromParams } from "./lib/useGetPersonIdFromParams";
export { getFullName } from "./lib/getFullName";
export { PersonCard } from "./ui/PersonCard/PersonCard";
export { PersonTitle } from "./ui/PersonTitle/PersonTitle";

// CRUD
export { addPerson } from "./api/addPerson";
export { deletePerson } from "./api/deletePerson";
export { getAllPersons } from "./api/getAllPersons";
export { getPerson } from "./api/getPerson";
export { updatePerson } from "./api/updatePerson";


// selectors
export { 
  selectAllPersons,
  selectCurrentPerson,
  selectPersonById,
  selectPersonIds,
  deletePersonAndDepData
} from "./model/personsSlice";
