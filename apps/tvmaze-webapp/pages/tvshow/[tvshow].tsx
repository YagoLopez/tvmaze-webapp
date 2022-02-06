// todo: add go to top fab icon
// todo: add animation
// todo: remove material libs
// todo: redirect to index if no show in store
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { ITvShow } from '../../models/show/ITvShow'
import { CardActions } from '@mui/material'
import Button from '@mui/material/Button'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import { getImage } from '../../utils'
import { useRouter } from 'next/router'

export default function MediaControlCard() {
  const tvShow: ITvShow = useSelector((state: RootState) => state.tvShow)
  const { show } = tvShow
  const router = useRouter()
  const onGoBackBtn = () => router.back()
  // const theme = useTheme()

  console.log(show)

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        height: '85vh',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0.5em',
      }}
    >
      <Card
        sx={{
          display: 'flex',
          width: 500,
          borderColor: 'lightgrey',
          borderStyle: 'solid',
          borderWidth: '1px',
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: '40%' }}
          image={getImage(show)}
          alt="Tv Show Image Cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              {show.name}
            </Typography>

            <Typography variant="body2" color="text.secondary" component="div">
              {show.summary === null ? (
                <>No Information Available</>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
              )}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              component="div"
            >
              <span>🗣️ {show.language}</span>
              <span> *️⃣ Rating: {show.rating.average}</span>
              <div>📺 Network: {show?.network?.name}</div>
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="contained"
              startIcon={<ArrowCircleLeftTwoToneIcon />}
              onClick={onGoBackBtn}
            >
              Return
            </Button>
            <Button
              sx={{ marginLeft: '8px' }}
              color="secondary"
              variant="contained"
              target="_blank"
              href={show.url}
              endIcon={<ArrowCircleRightTwoToneIcon />}
            >
              Website
            </Button>
          </CardActions>
        </Box>
      </Card>
    </div>
  )
}
