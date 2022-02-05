import axios from 'axios'
import { ITvShow } from '../ITvShow'
import {
  IRepository,
  IResponse,
  Singleton,
} from '@tvmaze-webapp/react-query-crud'

@Singleton
export class MockTvShowsRepository implements IRepository<ITvShow, IResponse> {
  readonly name = 'shows-repository'
  readonly baseURL = '/api/mock-tvshows'
  readonly axiosClient = axios.create({ baseURL: this.baseURL })

  getTvShowList = async (): Promise<ITvShow[]> => {
    const { data } = await this.axiosClient.get(null)
    return data
  }
}
