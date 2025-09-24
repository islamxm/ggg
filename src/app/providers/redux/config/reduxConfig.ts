import {configureStore} from '@reduxjs/toolkit'

import { personsReducer } from '@entities/person'

export const store = configureStore({
  reducer: {
    personsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store['getState']>
export type AppDispatch = typeof store['dispatch']
