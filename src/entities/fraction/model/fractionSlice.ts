import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Fraction } from "./types";

type InitialState = {
  fractions: Array<Fraction>
}

const initialState: InitialState = {
  fractions: []
}

const fractionSlice = createSlice({
  name: 'fraction',
  initialState,
  reducers: {
    initFractions: (state, {payload}: PayloadAction<Array<Fraction>>) => {
      state.fractions = payload
    },
    addFraction: (state, {payload}: PayloadAction<Fraction>) => {
      state.fractions.push(payload)
    },
    deleteFraction: (state, {payload}: PayloadAction<number>) => {
      state.fractions = state.fractions.filter(f => f.id !== payload)
    }
  }
})

export const fractionActions = fractionSlice.actions
export const fractionReducer = fractionSlice.reducer