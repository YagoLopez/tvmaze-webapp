// todo: add PWA and add to readme
import { useState } from 'react'
import { useRouter } from 'next/router'
import TextField from '@mui/material/TextField'
import { InputAdornment, Link } from '@mui/material'
import Button from '@mui/material/Button'
import { CONST } from '../constants'
import SlideshowTwoToneIcon from '@mui/icons-material/SlideshowTwoTone'
import ScreenSearchDesktopTwoToneIcon from '@mui/icons-material/ScreenSearchDesktopTwoTone'
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone'
import Typography from '@mui/material/Typography'
import { CSS } from '../utils/styles'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'

export default function PageIndex() {
  const router = useRouter()
  const [searchString, setSearchString] = useState<string>('')

  const onSearchBtn = () =>
    router.push(`/search/${searchString}`, undefined, { shallow: true })

  const onChangeSearchString = (event) => setSearchString(event.target.value)

  const isValid = (searchString: string): boolean =>
    searchString.length >= CONST.MIN_LENGTH

  const onResetBtn = () => setSearchString('')

  const showValidationMsg = (searchString: string): boolean =>
    !isValid(searchString) && searchString.length > 0

  const getHelperText = (searchString: string): string =>
    isValid(searchString) ? CONST.HELPER_TEXT : CONST.HELPER_TEXT_ERROR

  const onKeyDown = (event) => {
    if (event.key === 'Enter' && isValid(searchString)) {
      onSearchBtn()
    }
  }

  return (
    <>
      <div className="scale-in-center" style={CSS.container}>
        <Card sx={CSS.card_search}>
          <Box sx={CSS.box}>
            <CardContent sx={CSS.card_content}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                className="index-title"
              >
                🎞️ Search for Tv Shows
              </Typography>
              <TextField
                sx={CSS.search_container}
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
                      <ScreenSearchDesktopTwoToneIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <div style={CSS.search_container}>
                <Button
                  id="btn-search"
                  sx={CSS.btn_search}
                  disabled={!isValid(searchString)}
                  onClick={onSearchBtn}
                  variant="contained"
                  startIcon={<SlideshowTwoToneIcon />}
                >
                  Search
                </Button>
                <Button
                  id="btn-reset"
                  color="error"
                  sx={CSS.btn_search}
                  onClick={onResetBtn}
                  variant="contained"
                  startIcon={<HighlightOffTwoToneIcon />}
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Box>
        </Card>
      </div>
      <Link
        sx={CSS.link_audit}
        href="/audit.html"
        underline="hover"
        target="_blank"
      >
        📊 Audit
      </Link>
    </>
  )
}
