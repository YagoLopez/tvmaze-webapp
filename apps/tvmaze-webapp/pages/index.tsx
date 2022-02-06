import { useState } from 'react'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import { InputAdornment, Paper } from '@mui/material'
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone'
import Button from '@mui/material/Button'
import LocalMoviesTwoToneIcon from '@mui/icons-material/LocalMoviesTwoTone'
import { CONST } from '../constants'

export default function PageIndex() {
  const router = useRouter()
  const [searchString, setSearchString] = useState<string>('')

  const onClickSearch = () =>
    router.push(`/search/${searchString}`, undefined, { shallow: true })

  const onChangeSearchString = (event) => setSearchString(event.target.value)

  const isValid = (searchString: string): boolean =>
    searchString.length > CONST.MIN_LENGTH

  const showValidationMsg = (searchString: string): boolean =>
    !isValid(searchString) && searchString.length > 0

  const getHelperText = (searchString: string): string =>
    isValid(searchString) ? CONST.HELPER_TEXT : CONST.HELPER_TEXT_ERROR

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && isValid(searchString)) {
      console.log('do validate')
      onClickSearch()
    }
  }

  console.log(searchString)

  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  // const onClickIncrement = () => {
  //   dispatch(increment())
  // }
  // const onClickDecrement = () => {
  //   dispatch(decrement())
  // }

  return (
    <div>
      <h1>TvMaze Web App</h1>
      <Paper elevation={3}>
        <TextField
          error={showValidationMsg(searchString)}
          value={searchString}
          onChange={onChangeSearchString}
          onKeyDown={onKeyDown}
          helperText={getHelperText(searchString)}
          id="input_search"
          label={CONST.INPUT_LABEL}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalMoviesTwoToneIcon />
              </InputAdornment>
            ),
          }}
        />
        <div>
          <Button
            disabled={!isValid(searchString)}
            onClick={onClickSearch}
            variant="contained"
            startIcon={<ScreenSearchDesktopTwoToneIcon />}
          >
            Search
          </Button>
        </div>
      </Paper>
    </div>
  )
}
