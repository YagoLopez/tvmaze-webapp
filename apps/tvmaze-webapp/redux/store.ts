import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import tvShowReducer from './tvShowSlice'

export const store = configureStore({
  reducer: { counter: counterReducer, tvShow: tvShowReducer },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
