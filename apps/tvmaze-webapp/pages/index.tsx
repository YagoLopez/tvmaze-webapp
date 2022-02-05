import { useRouter } from 'next/router'
import { TvShowsRepository } from '../models/show/repositories/TvShowsRepository'
import { MockTvShowsRepository } from '../models/show/repositories/MockTvShowsRepository'
import { IRepository, useRepository } from '@tvmaze-webapp/react-query-crud'
import { useState } from 'react'
import { ITvShow } from '../models/show/ITvShow'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { decrement, increment } from '../redux/counterSlice'
import { setTvShow } from '../redux/tvShowSlice'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export interface IPageListTvShows {
  tvShowsRepository: IRepository<ITvShow, Record<string, unknown>>
}

export default function PageIndex({
  tvShowsRepository = new MockTvShowsRepository(),
}: IPageListTvShows) {
  const router = useRouter()
  const { useGetTvShowList } = useRepository(tvShowsRepository)
  const [searchString, setSearchString] = useState<string>('girls')
  const { data: tvShowsList, isLoading, error } = useGetTvShowList(searchString)

  console.log(tvShowsList)

  const count = useSelector((state: RootState) => state.counter.value)
  const tvShow = useSelector((state: RootState) => state.tvShow)
  const dispatch = useDispatch()
  const onClickIncrement = () => {
    dispatch(increment())
  }
  const onClickDecrement = () => {
    dispatch(decrement())
  }
  const onClickSetTvShow = () => {
    console.log(tvShowsList[count])
    dispatch(setTvShow(tvShowsList[count]))
  }

  return (
    <>
      <h1>
        <span> Hello there, </span>
        Welcome tvmaze-web3 👋
      </h1>
      <div>Count: {count}</div>
      <div>
        <button onClick={onClickIncrement}>Increment</button>
      </div>
      <div>
        <button onClick={onClickDecrement}>Decrement</button>
      </div>
      <div>
        <button onClick={onClickSetTvShow}>set tv show</button>
      </div>

      <pre style={{ color: 'red' }}>{JSON.stringify(tvShow, null, 2)}</pre>

      <hr />
      <pre>{JSON.stringify(tvShowsList, null, 2)}</pre>
    </>
  )
}
