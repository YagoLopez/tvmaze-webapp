import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITvShow } from '../models/show/ITvShow'

const initialState = { score: null, show: null }

export const tvShowSlice = createSlice({
  name: 'tvShow',
  initialState,
  reducers: {
    setTvShow: (state, action: PayloadAction<ITvShow>) => {
      state.score = action.payload.score
      state.show = action.payload.show
    },
  },
})

export const { setTvShow } = tvShowSlice.actions

const tvShowReducer = tvShowSlice.reducer
export default tvShowReducer
