import { useRouter } from 'next/router'
import { TvShowsRepository } from '../../models/show/repositories/TvShowsRepository'
import { IRepository, useRepository } from '@tvmaze-webapp/react-query-crud'
import { ITvShow } from '../../models/show/ITvShow'
import TvShowList from '../../components/List/TvShowList'
import Loader from '../../components/Loader/Loader'
import AppError from '../../components/AppError/AppError'

export interface IProps {
  tvShowsRepository: IRepository<ITvShow>
}

export default function PageSearchResults({
  tvShowsRepository = new TvShowsRepository(),
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
