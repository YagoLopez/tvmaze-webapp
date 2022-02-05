import { useRouter } from 'next/router'
import { TvShowsRepository } from '../../models/show/repositories/TvShowsRepository'
import { MockTvShowsRepository } from '../../models/show/repositories/MockTvShowsRepository'
import { IRepository, useRepository } from '@tvmaze-webapp/react-query-crud'
import { ITvShow } from '../../models/show/ITvShow'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setTvShow } from '../../redux/tvShowSlice'

import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { ListItemButton } from '@mui/material'
import { useState } from 'react'

export interface IPageListTvShows {
  tvShowsRepository: IRepository<ITvShow, Record<string, unknown>>
}

export default function PageSearchResults({
  tvShowsRepository = new MockTvShowsRepository(),
}: IPageListTvShows) {
  const {
    query: { terms: searchString },
  } = useRouter()
  const { useGetTvShowList } = useRepository(tvShowsRepository)
  const {
    data: tvShowsList,
    isLoading,
    error,
  } = useGetTvShowList(String(searchString))

  console.log(tvShowsList)

  const count = useSelector((state: RootState) => state.counter.value)
  const tvShow = useSelector((state: RootState) => state.tvShow)
  const dispatch = useDispatch()
  const [selectedIndex, setSelectedIndex] = useState<number>(null)

  const onClickTvShow = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    tvShow: ITvShow
  ) => {
    dispatch(setTvShow(tvShow))
    setSelectedIndex(index)
  }

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {(tvShowsList as ITvShow[])?.map((tvShow: ITvShow, index: number) => {
          const { show } = tvShow
          return (
            <>
              <ListItemButton
                alignItems="flex-start"
                selected={selectedIndex === index}
                onClick={(event) => onClickTvShow(event, index, tvShow)}
              >
                <ListItemText
                  primary={`Title: ${show.name}`}
                  secondary={
                    <>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Language: {show.language}
                      </Typography>

                      {show.summary === null ? (
                        <div>No Summary</div>
                      ) : (
                        <div
                          dangerouslySetInnerHTML={{ __html: show.summary }}
                        ></div>
                      )}
                    </>
                  }
                />
              </ListItemButton>
            </>
          )
        })}
      </List>

      <div>Count: {count}</div>

      {/*<pre>{JSON.stringify(tvShowsList, null, 2)}</pre>*/}
    </>
  )
}
