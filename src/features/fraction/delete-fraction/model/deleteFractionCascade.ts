import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Fraction } from "../../../../entities/fraction/model/types";
import { deleteSelections, getSelectionsByFractionId, selectionActions } from "@entities/selection";
import { db } from "@shared/config/dbConfig";
import { deleteFraction } from "./deleteFraction";

export const deleteFractionCascade = createAsyncThunk(
  'fractions/deleteCascade',
  async (fractionId: Fraction['id'], {dispatch, getState}) => {
    const selectionsToDelete = await getSelectionsByFractionId({db, fractionId})
    const selectionsIds = selectionsToDelete.map(selection => selection.id)
    if(selectionsIds.length > 0) {
      await deleteSelections({db, selectionsIds})
    }
    await deleteFraction({db, fractionId})
    dispatch(selectionActions.deleteByFraction(fractionId))
    return fractionId
  }
) 