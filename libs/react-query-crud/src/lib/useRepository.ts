import { IRepository } from './IRepository'
import { useQuery } from 'react-query'

export const useRepository = <T>(
  repository: IRepository<T>,
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
      () => repository.getTvShowList(searchString),
      config
    )

  return { useGetTvShowList }
}
