import axios from 'axios'
import { IShow } from '../IShow'
import {
  IRepository,
  IResponse,
  Singleton,
} from '@tvmaze-webapp/react-query-crud'

@Singleton
export class MockTvShowsRepository implements IRepository<IShow, IResponse> {
  readonly name = 'shows-repository'
  readonly baseURL = '/api/mock-tvshows'
  readonly axiosClient = axios.create({ baseURL: this.baseURL })

  getTvShowList = async (): Promise<IShow[]> => {
    const { data } = await this.axiosClient.get(null)
    return data
  }
}
