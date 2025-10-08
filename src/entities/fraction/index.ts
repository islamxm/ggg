export { fractionActions, fractionReducer } from "./model/fractionSlice";
export type { Fraction } from "./model/types";
export { useGetFractionIdFromParams } from "./lib/useGetFractionIdFromParams";

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
export { getFraction } from "./api/getFraction";
export { getAllFractions } from "./api/getAllFractions";