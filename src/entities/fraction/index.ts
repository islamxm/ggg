export { fractionActions, fractionReducer } from "./model/fractionSlice";
export type { Fraction } from "./model/types";


//REDUX
export {
  selectFractionById,
  selectAllFractions,
  selectFractionIds,
  deleteFractionAndDepData
} from "./model/fractionSlice";

//CRUD
export { addFraction } from "./api/addFraction";
export { deleteFraction } from "./api/deleteFraction";