import { configureStore } from '@reduxjs/toolkit'
import appSlice from './redux/appSlice'
import countSlice from './redux/countSlice'

export const store = configureStore({
  reducer: {
    app: appSlice,
    counter: countSlice
  },
})