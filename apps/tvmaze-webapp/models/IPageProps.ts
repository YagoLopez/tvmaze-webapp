import { IRepository, IResponse } from '@tvmaze-webapp/react-query-crud'
import { IShow } from './show/IShow'

export interface IPageProps {
  tvShowsRepository: IRepository<IShow, Record<any, any>>
}
