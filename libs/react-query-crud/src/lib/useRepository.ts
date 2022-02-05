import { IRepository } from './IRepository'
import { useQuery } from 'react-query'

export const useRepository = <T, TError>(
  repository: IRepository<T, TError>,
  refetchInterval = 0
) => {
  const config = {
    staleTime: 0,
    refetchInterval,
    refetchIntervalInBackground: true,
  }

  const useGetTvShowList = (searchString: string) =>
    useQuery(
      [repository.name, searchString],
      () => repository.getShowList(searchString),
      config
    )

  return { useGetTvShowList }
}
