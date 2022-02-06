import List from '@mui/material/List'
import { ITvShow } from '../../models/show/ITvShow'
import TvShowListItem from '../ListItem'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { CSS } from './styles'

interface IProps {
  tvShowList: ITvShow[]
}

export default function TvShowList({ tvShowList = [] }: IProps) {
  const onFabClick = () => (window as any).scrollTo(0, 0)
  return (
    <div style={CSS.container}>
      <List sx={CSS.list}>
        {tvShowList.map((tvShow: ITvShow) => (
          <TvShowListItem key={tvShow.show.id} tvShow={tvShow} />
        ))}
      </List>
      <Fab color="primary" onClick={onFabClick} sx={CSS.fab_btn}>
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  )
}
