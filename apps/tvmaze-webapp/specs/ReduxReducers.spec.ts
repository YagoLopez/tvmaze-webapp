import { store } from '../redux/store'
import { setTvShow } from '../redux/tvShowSlice'
import { MockTvShow } from './MockTvShow'

describe('test redux reducers', () => {
  test('test initial empty state', () => {
    const state = store.getState()
    expect(state.tvShow).toEqual({ score: null, show: null })
  })

  test('test setTvShow() action', () => {
    store.dispatch(setTvShow(MockTvShow))
    const state = store.getState()
    expect(state.tvShow).toEqual(MockTvShow)
  })
})
