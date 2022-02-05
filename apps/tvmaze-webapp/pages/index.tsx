import { useRouter } from 'next/router'
import { TvShowsRepository } from '../models/show/repositories/TvShowsRepository'
import { MockTvShowsRepository } from '../models/show/repositories/MockTvShowsRepository'
import { IRepository, useRepository } from '@tvmaze-webapp/react-query-crud'
import { ITvShow } from '../models/show/ITvShow'

export interface IPageListTvShows {
  tvShowsRepository: IRepository<ITvShow, Record<string, unknown>>
}

export default function PageListTvShows({
  tvShowsRepository = new MockTvShowsRepository(),
}: IPageListTvShows) {
  const router = useRouter()
  const { useGetTvShowList } = useRepository(tvShowsRepository)
  const { data: tvShowsList, isLoading, error } = useGetTvShowList('girls')

  console.log(tvShowsList)

  return (
    <>
      <style jsx>{`
        .page {
        }
      `}</style>

      <h1>
        <span> Hello there, </span>
        Welcome tvmaze-web3 👋
      </h1>
      <pre>{JSON.stringify(tvShowsList, null, 2)}</pre>
    </>
  )
}
