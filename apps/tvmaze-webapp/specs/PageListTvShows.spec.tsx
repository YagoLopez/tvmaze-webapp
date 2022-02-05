import React from 'react'
import { render } from '@testing-library/react'

import PageListTvShows from '../pages/index'
import { QueryClient, QueryClientProvider } from 'react-query'
import { MockTvShowsRepository } from '../models/show/repositories/MockTvShowsRepository'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

describe('Test ListTvShows Page', () => {
  console.log = jest.fn()
  console.error = jest.fn()

  /**
   * Since FE is decoupled from BE we're able to pass a mock repository to Nextjs page component
   * that returns mock data coming from a json file for testing purposes
   */
  it('should render tv shows list page without errors', () => {
    const { baseElement } = render(
      <QueryClientProvider client={new QueryClient()}>
        <Provider store={store}>
          <PageListTvShows tvShowsRepository={new MockTvShowsRepository()} />
        </Provider>
      </QueryClientProvider>
    )
    expect(baseElement).toBeTruthy()
  })

  it('should throw if repository is null', () => {
    let error
    try {
      render(
        <QueryClientProvider client={new QueryClient()}>
          <Provider store={store}>
            <PageListTvShows tvShowsRepository={null} />
          </Provider>
        </QueryClientProvider>
      )
      expect(true).toBe(false)
    } catch (e) {
      error = e
    }
    expect(error).toBeTruthy()
  })
})
