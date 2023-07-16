import { configureStore } from '@reduxjs/toolkit'
import problemsSlice from '../Features/problemsSlice'

export const store = configureStore({
  reducer: {
   problems:problemsSlice,
  },
})