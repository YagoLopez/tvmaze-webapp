import { ListItemButton } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import { ITvShow } from '../../models/show/ITvShow'
import { setTvShow } from '../../redux/tvShowSlice'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { getImage } from '../../utils'
import { CSS } from './styles'

interface IProps {
  tvShow: ITvShow
}

export default function TvShowListItem({ tvShow }: IProps) {
  const { show } = tvShow
  const dispatch = useDispatch()
  const router = useRouter()

  const onClickTvShow = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tvShow: ITvShow
  ) => {
    dispatch(setTvShow(tvShow))
    router.push(`/tvshow/${show.id}`, undefined, { shallow: true })
  }

  const truncate = (str: string, length: number): string =>
    str.length > length ? `${str.substring(0, length - 1)}&hellip;` : str

  return (
    <ListItemButton
      style={{ paddingTop: 0, paddingBottom: 0 }}
      onClick={(event) => onClickTvShow(event, tvShow)}
    >
      <ListItemText
        primary={
          <div style={CSS.item_text}>
            <div>
              <img src={getImage(show)} alt="thumbnail" style={CSS.show_img} />
            </div>

            <div style={CSS.summary}>
              <div>Title: {show.name}</div>
              {show.summary === null ? (
                <>No Information Available</>
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: truncate(show.summary, 100),
                  }}
                ></div>
              )}
              <div>Language: {show.language}</div>
            </div>
          </div>
        }
      />
    </ListItemButton>
  )
}
