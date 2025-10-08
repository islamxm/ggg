import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Selection, SelectionsOfFraction } from "./types";
import type { Fraction } from "@entities/fraction/@x/selection";

const selectionsAdapter = createEntityAdapter({
  selectId: (selection: Selection) => selection.id,
  sortComparer: (a, b) => a.date.getTime() - b.date.getTime()
})


type State = ReturnType<typeof selectionsAdapter.getInitialState> & {
  currentSelection: Array<SelectionsOfFraction>,
  selectionDetailsDate: Date
}

const initialState: State = {
  ...selectionsAdapter.getInitialState(),
  currentSelection: [],
  selectionDetailsDate: new Date()
}

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    
    update: (state, {payload}: PayloadAction<Array<Selection>>) => {
      selectionsAdapter.setAll(state, payload)
    },

    add: selectionsAdapter.addOne,

    delete: selectionsAdapter.removeOne,

    deleteByFraction: (state, {payload}: PayloadAction<Fraction['id']>) => {
      const idsToDelete = state.ids.filter(id => state.entities[id]!.fractionId === payload)
      selectionsAdapter.removeMany(state, idsToDelete)
    },

    updateCurrentSelection: (state, {payload}: PayloadAction<Array<SelectionsOfFraction>>) => {
      state.currentSelection = payload
    },

    addSelectionToCurrentSelection: (state, {payload}: PayloadAction<Selection>) => {
      const indexOfFraction = state.currentSelection.findIndex(s => s.fractionId === payload.fractionId)
      if(indexOfFraction !== -1) {
        state.currentSelection[indexOfFraction].selections.push(payload)
      }
    },

    updateSelectionDetailsDate: (state, {payload}: PayloadAction<Date>) => { 
      state.selectionDetailsDate = payload
    }
  }
})

const selectSelectionsState = (state: StoreType) => state.selectionReducer

export const {
  selectAll: selectAllSelections,
  selectById: selectSelectionById,
  selectIds: selectSelectionIds
} = selectionsAdapter.getSelectors(selectSelectionsState)

export const selectCurrentSelection = (state: StoreType) => state.selectionReducer.currentSelection
export const selectSelectionDetailsDate = (state: StoreType) => state.selectionReducer.selectionDetailsDate

export const selectionActions = selectionSlice.actions
export const selectionReducer = selectionSlice.reducer