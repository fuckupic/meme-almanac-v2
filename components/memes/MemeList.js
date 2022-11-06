import { spacing, Stack } from '@mui/system'
import classes from './MeetupList.module.css'
import Meme from './Meme'
import { Grid } from '@mui/material'
import Paper from '@mui/material/Paper'

function MemeList({ memes }) {
  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {memes?.map((meme) => (
        <Grid item xs={3}>
          <Paper>
            <Meme
              key={meme.id}
              id={meme.id}
              name={meme.name}
              description={meme.description}
              date={meme.date}
              dateAdded={meme.dateAdded}
            />
          </Paper>
        </Grid>
      ))}
    </Grid>
  )
}

export default MemeList
