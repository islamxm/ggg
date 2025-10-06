import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Person } from "./types";

const personsAdapter = createEntityAdapter({
  selectId: (s: Person) => s.id,
  sortComparer: (a, b) => a.id - b.id
})

type State = ReturnType<typeof personsAdapter['getInitialState']> & {
  currentPerson?: Person
}

const initialState: State = personsAdapter.getInitialState()

const personsSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {

    add: personsAdapter.addOne,

    delete: personsAdapter.removeOne,

    init: (state, { payload }: PayloadAction<Array<Person>>) => {
      personsAdapter.setAll(state, payload)
    },

    updateCurrentPerson: (state, {payload}: PayloadAction<Person | undefined>) => {
      state.currentPerson = payload
    },
  }
})

const selectPersonsState = (state: StoreType) => state.personsReducer 
 
export const {
  selectAll: selectAllPersons,
  selectById: selectPersonById,
  selectIds: selectPersonIds,
} = personsAdapter.getSelectors(selectPersonsState)
 
export const selectCurrentPerson = (state: StoreType) => state.personsReducer.currentPerson

export const personsReducer = personsSlice.reducer
export const personsActions = personsSlice.actions