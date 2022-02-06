// todo: extract inline styles
import { ListItemButton } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import { ITvShow } from '../../models/show/ITvShow'
import { setTvShow } from '../../redux/tvShowSlice'
import { useDispatch } from 'react-redux'

interface IProps {
  tvShow: ITvShow
  index: number
}

export default function TvShowListItem({ tvShow, index }: IProps) {
  const { show } = tvShow
  const dispatch = useDispatch()

  const onClickTvShow = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    tvShow: ITvShow
  ) => dispatch(setTvShow(tvShow))

  const truncate = (str, n): string =>
    str.length > n ? `${str.substring(0, n - 1)}&hellip;` : str

  const getImage = (show: { image: { medium: string } }): string =>
    show.image?.medium ? show.image.medium : '/img-placeholder.jpg'

  return (
    <ListItemButton
      style={{ paddingTop: 0, paddingBottom: 0 }}
      onClick={(event) => onClickTvShow(event, index, tvShow)}
    >
      <ListItemText
        primary={
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: 'smaller',
              color: 'GrayText',
            }}
          >
            <div>
              <img
                src={getImage(show)}
                alt="thumbnail"
                style={{ height: '8em' }}
              />
            </div>

            <div style={{ marginLeft: '1.5em' }}>
              <div>Title: {show.name}</div>

              {show.summary === null ? (
                <div>No Information Available</div>
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
