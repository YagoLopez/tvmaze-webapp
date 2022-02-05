import { IRepository, IResponse } from '@tvmaze-webapp/react-query-crud'
import { IShow } from './show/IShow'

export interface IPageProps {
  currenciesRepository: IRepository<IShow, IResponse>
}
