import { configureStore } from '@reduxjs/toolkit'
import tvShowReducer from './tvShowSlice'

export const store = configureStore({
  reducer: { tvShow: tvShowReducer },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
