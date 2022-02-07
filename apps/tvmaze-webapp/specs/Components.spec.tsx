import React from 'react'
import { render } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
import { TvShowsRepository } from '../models/show/repositories/TvShowsRepository'
import TvShowList from '../components/List/TvShowList'
import PageSearchResults from '../pages/search/[terms]'
import PageIndex from '../pages/index'
import PageTvShowDetail from '../pages/tvshow/[tvshow]'

describe('Test ListTvShows Page', () => {
  console.error = jest.fn()

  it('should render TvShowList cmp without errors', async () => {
    const tvRepository = new TvShowsRepository()
    const tvShowList = await tvRepository.getTvShowList('girls')
    const { baseElement } = render(
      <Provider store={store}>
        <TvShowList tvShowList={tvShowList} />
      </Provider>
    )
    expect(baseElement).toBeTruthy()
  })

  it('should throw if repository is null in PageSearchResults', () => {
    let error
    try {
      render(
        <QueryClientProvider client={new QueryClient()}>
          <Provider store={store}>
            <PageSearchResults tvShowsRepository={null} />
          </Provider>
        </QueryClientProvider>
      )
      expect(true).toBe(false)
    } catch (e) {
      error = e
    }
    expect(error).toBeTruthy()
  })

  it('should render index page without errors', () => {
    const { baseElement } = render(<PageIndex />)
    expect(baseElement).toBeTruthy()
  })

  it('should render show detail page without errors', () => {
    const { baseElement } = render(
      <Provider store={store}>
        <PageTvShowDetail />
      </Provider>
    )
    expect(baseElement).toBeTruthy()
  })
})
