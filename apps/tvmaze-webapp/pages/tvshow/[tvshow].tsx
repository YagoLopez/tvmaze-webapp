// todo: redirect to index if no show in store
// todo: on click image
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { ITvShow } from '../../models/show/ITvShow'
import Button from '@mui/material/Button'
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone'
import { getImage, parseString } from '../../utils'
import { useRouter } from 'next/router'
import { CSS } from '../../utils/styles'

export default function PageTvShowDetail() {
  const tvShow: ITvShow = useSelector((state: RootState) => state.tvShow)
  const router = useRouter()
  const { show } = tvShow
  const onGoBackBtn = () => router.back()

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
          <CardContent sx={CSS.card_content_detail}>
            <Typography component="div" variant="h5">
              {show?.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" component="div">
              {show?.summary === null ? (
                <>No Information Available</>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: show?.summary }} />
              )}
            </Typography>
          </CardContent>
          <div>
            <Typography
              sx={CSS.details}
              variant="caption"
              color="text.secondary"
              component="div"
            >
              <span>🗣️ {show?.language}</span>
              <span> *️⃣ Rating: {parseString(show?.rating?.average)}</span>
              <div>📺 Network: {parseString(show?.network?.name)}</div>
            </Typography>

            <Button
              sx={CSS.btn}
              color="primary"
              variant="contained"
              startIcon={<ArrowCircleLeftTwoToneIcon />}
              onClick={onGoBackBtn}
            >
              Go back
            </Button>
            <Button
              sx={CSS.btn}
              color="secondary"
              variant="contained"
              target="_blank"
              href={show?.url}
              endIcon={<ArrowCircleRightTwoToneIcon />}
            >
              Website
            </Button>
          </div>
        </Box>
      </Card>
    </div>
  )
}
