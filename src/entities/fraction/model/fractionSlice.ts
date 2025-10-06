import { createSlice, type PayloadAction, createEntityAdapter } from "@reduxjs/toolkit";
import type { Fraction } from "./types";

const fractionsAdapter = createEntityAdapter({
  selectId: (fraction: Fraction) => fraction.id,
  sortComparer: (a, b) => a.id - b.id
})

const fractionSlice = createSlice({
  name: 'fraction',
  initialState: fractionsAdapter.getInitialState(),
  reducers: {
    update: (state, { payload }: PayloadAction<Array<Fraction>>) => {
      fractionsAdapter.setAll(state, payload)
    },
    added: fractionsAdapter.addOne,
    delete: fractionsAdapter.removeOne
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