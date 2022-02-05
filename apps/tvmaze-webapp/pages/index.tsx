import { useRouter } from 'next/router'
import { TvShowsRepository } from '../models/show/repositories/TvShowsRepository'
import { IRepository, useRepository } from '@tvmaze-webapp/react-query-crud'
import { IShow } from '../models/show/IShow'
import { MockTvShowsRepository } from '../models/show/repositories/MockTvShowsRepository'

export interface IPageListTvShows {
  tvShowsRepository: IRepository<IShow, Record<string, unknown>>
}

export default function PageListTvShows({
  tvShowsRepository = new MockTvShowsRepository(),
}: IPageListTvShows) {
  const router = useRouter()
  const { useGetTvShowList } = useRepository(tvShowsRepository)
  const { data: tvShowsList, isLoading, error } = useGetTvShowList('girls')

  console.log(tvShowsList)

  return (
    <div>
      <style jsx>{`
        .page {
        }
      `}</style>

      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome tvmaze-web3 👋
            </h1>
            <pre>{JSON.stringify(tvShowsList, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}
