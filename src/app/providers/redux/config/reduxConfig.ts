import {configureStore} from '@reduxjs/toolkit'

import { personsReducer } from '@entities/person'
import { fractionReducer } from '@entities/fraction'
import { selectionReducer } from '@entities/selection'
import { dutyReducer } from '@entities/duty'
import { achieveReducer } from '@entities/achieve'

export const store = configureStore({
  reducer: {
    personsReducer,
    fractionReducer,
    selectionReducer,
    dutyReducer,
    achieveReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store['getState']>
export type AppDispatch = typeof store['dispatch']
