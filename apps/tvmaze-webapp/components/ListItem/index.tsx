import { ListItemButton } from '@mui/material'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
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

  const truncate = (str, n) =>
    str.length > n ? `${str.substring(0, n - 1)}&hellip;` : str

  return (
    <ListItemButton onClick={(event) => onClickTvShow(event, index, tvShow)}>
      <ListItemText
        secondary={
          <div
            datatype="item"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div>
              <img
                src={show?.image?.medium}
                alt="thumbnail"
                style={{ height: '8em' }}
              />
            </div>
            <div style={{ marginLeft: '1.5em' }}>
              <div>Title: {show.name}</div>
              {show.summary === null ? (
                <div>No Information Available</div>
              ) : (
                <span
                  dangerouslySetInnerHTML={{
                    __html: truncate(show.summary, 100),
                  }}
                ></span>
              )}
              <div>Language: {show.language}</div>
            </div>
          </div>
        }
      />
    </ListItemButton>
  )
}
