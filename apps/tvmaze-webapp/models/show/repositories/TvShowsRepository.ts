import axios from 'axios'
import { ITvShow } from '../ITvShow'
import { IRepository, Singleton } from '@tvmaze-webapp/react-query-crud'

@Singleton
export class TvShowsRepository implements IRepository<ITvShow> {
  readonly name = 'shows-repository'
  readonly baseURL = 'https://api.tvmaze.com/search/'
  readonly axiosClient = axios.create({ baseURL: this.baseURL })

  getTvShowList = async (searchString: string): Promise<ITvShow[]> => {
    const { data } = await this.axiosClient.get<ITvShow[]>(
      `shows?q=${searchString}`
    )
    return data
  }
}
