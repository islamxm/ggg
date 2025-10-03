import {configureStore} from '@reduxjs/toolkit'

import { personsReducer } from '@entities/person'
import { fractionReducer } from '@entities/fraction'

export const store = configureStore({
  reducer: {
    personsReducer,
    fractionReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store['getState']>
export type AppDispatch = typeof store['dispatch']
