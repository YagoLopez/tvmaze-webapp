import { useRouter } from 'next/router'
import { ShowsRepository } from '../models/show/repositories/ShowsRepository'
import { useRepository } from '@tvmaze-webapp/react-query-crud'

export default function PageListTvShows({
  tvShowsRepository = new ShowsRepository(),
}: Record<any, any>) {
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
