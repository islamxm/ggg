export type { Duties, DutyCreateType, DutyItem, Duty } from "./model/types";
export { duties, dutiesArray } from "./model/consts";
export { getDutyDataKeyFromDate } from "./lib/getDutyDataKeyFromDate";

export { DutyDayTag } from "./ui/DutyDayTag/DutyDayTag";
export { DutyMonthTag } from "./ui/DutyMonthTag/DutyMonthTag";



//REDUX
export {
  dutyReducer,
  dutyActions
} from "./model/dutySlice";

//CRUD
export { addDuties } from "./api/addDuties";
