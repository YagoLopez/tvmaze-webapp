import { IRepository } from '@tvmaze-webapp/react-query-crud'
import { ITvShow } from './show/ITvShow'

export interface IPageProps {
  tvShowsRepository: IRepository<ITvShow>
}
