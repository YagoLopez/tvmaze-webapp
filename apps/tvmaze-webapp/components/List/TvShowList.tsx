import List from '@mui/material/List'
import { ITvShow } from '../../models/show/ITvShow'
import TvShowListItem from '../ListItem'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

interface IProps {
  tvShowList: ITvShow[]
}

export default function TvShowList({ tvShowList = [] }: IProps) {
  const onFabClick = () => (window as any).scrollTo(0, 0)
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <List
        sx={{
          marginTop: '0.4em',
          marginBottom: '1em',
          width: '700px',
        }}
      >
        {tvShowList.map((tvShow: ITvShow, index: number) => (
          <TvShowListItem key={tvShow.show.id} tvShow={tvShow} index={index} />
        ))}
      </List>
      <Fab
        color="primary"
        onClick={onFabClick}
        sx={{ position: 'fixed', bottom: 20, right: 10 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </div>
  )
}
