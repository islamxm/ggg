import { createEntityAdapter, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Achieve } from "./types";

const achieveAdapter = createEntityAdapter({
  selectId: (achieve: Achieve) => achieve.id,
  sortComparer: (a, b) => a.id - b.id
})

const achieveSlice = createSlice({
  name: 'achieve',
  initialState: achieveAdapter.getInitialState(),
  reducers: {
    init: (state, { payload }: PayloadAction<Array<Achieve>>) => {
      achieveAdapter.setAll(state, payload)
    },
    add: achieveAdapter.addOne,
    delete: achieveAdapter.removeOne
  }
})

const selectAchieveState = (state: StoreType) => state.achieveReducer

export const {
  selectAll: selectAllAchieves,
  selectById: selectAchieveById,
  selectIds: selectAchieveIds
} = achieveAdapter.getSelectors(selectAchieveState)

export const achieveReducer = achieveSlice.reducer
export const achieveActions = achieveSlice.actions