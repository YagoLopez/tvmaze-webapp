import List from '@mui/material/List'
import { ITvShow } from '../../models/show/ITvShow'
import TvShowListItem from '../ListItem'

interface IProps {
  tvShowList: ITvShow[]
}

export default function TvShowList({ tvShowList = [] }: IProps) {
  return (
    <List
      sx={{
        marginTop: '0.4em',
        marginBottom: '1em',
        width: '100%',
        maxWidth: '100%',
        bgcolor: 'background.paper',
      }}
    >
      {tvShowList.map((tvShow: ITvShow, index: number) => (
        <TvShowListItem key={tvShow.show.id} tvShow={tvShow} index={index} />
      ))}
    </List>
  )
}
