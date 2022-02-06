// todo: comentar en readme.md que network requests están cacheadas
// todo: fav icon
import { useRouter } from 'next/router'
import { TvShowsRepository } from '../../models/show/repositories/TvShowsRepository'
import { MockTvShowsRepository } from '../../models/show/repositories/MockTvShowsRepository'
import { IRepository, useRepository } from '@tvmaze-webapp/react-query-crud'
import { ITvShow } from '../../models/show/ITvShow'
import TvShowList from '../../components/List/TvShowList'
import Loader from '../../components/Loader/Loader'
import AppError from '../../components/AppError/AppError'

export interface IProps {
  tvShowsRepository: IRepository<ITvShow, Record<string, unknown>>
}

export default function PageSearchResults({
  tvShowsRepository = new MockTvShowsRepository(),
}: IProps) {
  const {
    query: { terms: searchString },
  } = useRouter()

  const { useGetTvShowList } = useRepository(tvShowsRepository)

  const {
    data: tvShowsList,
    isLoading,
    error,
  } = useGetTvShowList(String(searchString))

  if (isLoading) return <Loader />

  if (error) return <AppError error={error} />

  return <TvShowList tvShowList={tvShowsList as ITvShow[]} />
}
