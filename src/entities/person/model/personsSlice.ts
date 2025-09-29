import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Person } from "./types";

type InitialState = {
  persons: Array<Person>,
  currentPerson?: Person
}

const initialState: InitialState = {
  persons: [],
  currentPerson: undefined
}

const personsSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    updateCurrentPerson: (state, {payload}: PayloadAction<Person | undefined>) => {state.currentPerson = payload},

    addPerson: (state, {payload}: PayloadAction<Person>) => {state.persons.push(payload)},

    deletePerson: (state, {payload}: PayloadAction<number>) => {state.persons = state.persons.filter(person => person.id !== payload)},

    initPersons: (state, {payload}: PayloadAction<Array<Person>>) => {state.persons = payload},
    
    updatePersons: (state, {payload}: PayloadAction<Person>) => {
      state.persons = state.persons.map(person => {
        if(person.id === payload.id) {
          return payload
        } 
        return person
      })
    }
  }
})


export const personsReducer = personsSlice.reducer
export const personsActions = personsSlice.actions