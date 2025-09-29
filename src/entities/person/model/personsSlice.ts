import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Person } from "./types";

type InitialState = {
  persons: Array<Person>
}

const initialState: InitialState = {
  persons: []
}

const personsSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {

    addPerson: (state, {payload}: PayloadAction<Person>) => {state.persons.push(payload)},

    deletePerson: (state, {payload}: PayloadAction<number>) => {state.persons = state.persons.filter(person => person.id !== payload)},

    initPersons: (state, {payload}: PayloadAction<Array<Person>>) => {state.persons = payload}
    
  }
})


export const personsReducer = personsSlice.reducer
export const personsActions = personsSlice.actions