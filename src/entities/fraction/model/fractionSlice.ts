import { createSlice, type PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";
import type { Fraction } from "./types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteSelections, getSelectionsByFractionId } from "@entities/selection";
import { db } from "@shared/config/dbConfig";
import { deleteFraction } from "@entities/fraction";

const fractionsAdapter = createEntityAdapter({
  selectId: (fraction: Fraction) => fraction.id,
  sortComparer: (a, b) => a.id - b.id
})

export const deleteFractionAndDepData = createAsyncThunk(
  'fractions/deleteCascade',
  async (fractionId: Fraction['id'], options) => {
    try {
      const selectionsToDelete = await getSelectionsByFractionId({ db, fractionId })
      const selectionsIds = selectionsToDelete.map(selection => selection.id)
      if (selectionsIds.length > 0) {
        await deleteSelections({ db, selectionsIds })
      }
      await deleteFraction({ db, fractionId })
      return fractionId
    } catch (err) {
      if (err instanceof Error) {
        console.log(err)
        options.rejectWithValue(fractionId)
      }
    }
  }
)

const fractionSlice = createSlice({
  name: 'fraction',
  initialState: fractionsAdapter.getInitialState(),
  reducers: {
    init: (state, { payload }: PayloadAction<Array<Fraction>>) => {
      fractionsAdapter.setAll(state, payload)
    },
    add: fractionsAdapter.addOne,
    delete: fractionsAdapter.removeOne
  },
  extraReducers(builder) {
    builder.addCase(deleteFractionAndDepData.fulfilled, (state, action) => {
      action.payload && fractionsAdapter.removeOne(state, action.payload)
    })
  }
})

const selectFractionsState = (state: StoreType) => state.fractionReducer

export const {
  selectAll: selectAllFractions,
  selectById: selectFractionById,
  selectIds: selectFractionIds
} = fractionsAdapter.getSelectors(selectFractionsState)

export const fractionActions = fractionSlice.actions
export const fractionReducer = fractionSlice.reducer