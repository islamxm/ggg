import { createSlice, createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit";
import type { Duty } from "./types";

const dutyAdapter = createEntityAdapter({
  selectId: (duty: Duty) => duty.id,
  sortComparer: (a, b) => a.id - b.id
})

const dutySlice = createSlice({
  name: 'duty',
  initialState: dutyAdapter.getInitialState(),
  reducers: {
    init: (state, { payload }: PayloadAction<Duty>) => {
      dutyAdapter.setAll(state, payload)
    },
    add: dutyAdapter.addOne,
    delete: dutyAdapter.removeOne
  }
})

const selectDutyState = (state: StoreType) => state.dutyReducer

export const {
  selectAll: selectAllDuties,
  selectById: selectDutyById,
  selectIds: selectDutyIds
} = dutyAdapter.getSelectors(selectDutyState)


export const dutyActions = dutySlice.actions
export const dutyReducer = dutySlice.reducer