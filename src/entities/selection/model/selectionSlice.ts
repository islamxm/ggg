import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Selection } from "./types";
import type { Fraction } from "@entities/fraction/@x/selection";

const selectionsAdapter = createEntityAdapter({
  selectId: (selection: Selection) => selection.id,
  sortComparer: (a, b) => a.date.getTime() - b.date.getTime()
})

const selectionSlice = createSlice({
  name: 'selection',
  initialState: selectionsAdapter.getInitialState(),
  reducers: {
    
    update: (state, {payload}: PayloadAction<Array<Selection>>) => {
      selectionsAdapter.setAll(state, payload)
    },

    add: selectionsAdapter.addOne,

    delete: selectionsAdapter.removeOne,

    deleteByFraction: (state, {payload}: PayloadAction<Fraction['id']>) => {
      const idsToDelete = state.ids.filter(id => state.entities[id]!.fractionId === payload)
      selectionsAdapter.removeMany(state, idsToDelete)
    }
  }
})

const selectSelectionsState = (state: StoreType) => state.selectionReducer

export const {
  selectAll: selectAllSelections,
  selectById: selectSelectionById,
  selectIds: selectSelectionIds
} = selectionsAdapter.getSelectors(selectSelectionsState)

export const selectionActions = selectionSlice.actions
export const selectionReducer = selectionSlice.reducer