import axios from 'axios'
import { IShow } from '../IShow'
import {
  IRepository,
  IResponse,
  Singleton,
} from '@tvmaze-webapp/react-query-crud'

@Singleton
export class TvShowsRepository implements IRepository<IShow, IResponse> {
  readonly name = 'shows-repository'
  readonly baseURL = 'https://api.tvmaze.com/search/'
  readonly axiosClient = axios.create({ baseURL: this.baseURL })

  private getData = async (queryString: string) => {
    const { data } = await this.axiosClient.get(`shows?q=${queryString}`)
    return data
  }

  getShowList = async (searchString: string): Promise<IShow[]> => {
    return this.getData(searchString)
  }
}
