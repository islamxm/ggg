import { createAsyncThunk, createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Person } from "./types";
import { db } from "@shared/config/dbConfig";
import { deleteDuties, getDutiesByPersonId } from "@entities/duty";
import { deletePerson } from "../api/deletePerson";

const personsAdapter = createEntityAdapter({
  selectId: (s: Person) => s.id,
  sortComparer: (a, b) => a.id - b.id
})

export const deletePersonAndDepData = createAsyncThunk(
  'person/deleteCascade',
  async (personId: Person['id'], config) => {
    try {
      const dutiesToDelete = await getDutiesByPersonId({ db, personId })
      const dutyIds = dutiesToDelete.map(duty => duty.id)
      if (dutyIds.length > 0) {
        await deleteDuties({ db, dutyIds })
      }
      await deletePerson({ db, personId })
      return personId
    } catch (err) {
      if (err instanceof Error) {
        return config.rejectWithValue(err.message || 'Error')
      }
    }
  }
)

type State = ReturnType<typeof personsAdapter.getInitialState> & {
  currentPerson?: Person
}

const initialState: State = personsAdapter.getInitialState()

const personsSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {

    init: (state, { payload }: PayloadAction<Array<Person>>) => {
      personsAdapter.setAll(state, payload)
    },

    add: personsAdapter.addOne,

    delete: personsAdapter.removeOne,

    update: personsAdapter.updateOne,

    updateCurrentPerson: (state, { payload }: PayloadAction<Person | undefined>) => {
      state.currentPerson = payload
    }
  },
  extraReducers(builder) {
    builder.addCase(deletePersonAndDepData.fulfilled, (state, action) => {
      action.payload && personsAdapter.removeOne(state, action.payload)
    });
  },

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