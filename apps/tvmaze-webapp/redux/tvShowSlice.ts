import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITvShow } from '../models/show/ITvShow'

const initialState: { tvShow: ITvShow } = { tvShow: null }

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {
    setTvShow: (state, action: PayloadAction<ITvShow>) => {
      state.tvShow = action.payload
    },
    // getTvShow: (state) => {
    //   return state
    // },
    // todo: remove comments
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { setTvShow } = tvShowSlice.actions

const tvShowReducer = tvShowSlice.reducer
export default tvShowReducer
