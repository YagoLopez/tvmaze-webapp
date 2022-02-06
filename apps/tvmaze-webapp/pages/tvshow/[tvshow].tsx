// todo: add go to top fab icon
// todo: remove material libs
// todo: redirect to index if no show in store
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
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
import { CSS } from './styles'

export default function MediaControlCard() {
  const tvShow: ITvShow = useSelector((state: RootState) => state.tvShow)
  const { show } = tvShow
  const router = useRouter()
  const onGoBackBtn = () => router.back()

  console.log(show)

  return (
    <div className="scale-in-center" style={CSS.container}>
      <Card sx={CSS.card}>
        <CardMedia
          component="img"
          sx={CSS.card_media}
          image={getImage(show)}
          alt="Tv Show Image Cover"
        />
        <Box sx={CSS.box}>
          <CardContent sx={CSS.card_content}>
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
              sx={CSS.btn}
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
