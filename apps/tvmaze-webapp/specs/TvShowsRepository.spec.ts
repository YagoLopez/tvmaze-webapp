import { TvShowsRepository } from '../models/show/repositories/TvShowsRepository'

describe('test TvShowsRepository', () => {
  const SEARCH_STRING = 'girls'
  let tvShowRepository = null
  let response = null

  beforeAll(async () => {
    tvShowRepository = new TvShowsRepository()
    response = await tvShowRepository.getTvShowList(SEARCH_STRING)
  })

  it('should get total of tv shows', async () => {
    expect(response.length).toBe(10)
  })

  it('should get corrctly first tv show', async () => {
    const showData = response[0].show
    expect(showData.id).toBe(139)
    expect(showData.url).toBe('https://www.tvmaze.com/shows/139/girls')
  })

  it('should get corrctly second tv show', async () => {
    const showData = response[1].show
    expect(showData.id).toBe(41734)
    expect(showData.url).toBe('https://www.tvmaze.com/shows/41734/girls')
  })
})
