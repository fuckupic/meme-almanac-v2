import { spacing, Stack } from '@mui/system'
import classes from './MeetupList.module.css'
import Meme from './Meme'
import { Grid } from '@mui/material'

function MemeList({ memes }) {
  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      maxWidth={'100rem'}
      sx={{ alignItems: '', justifyContent: 'center' }}
    >
      {memes
        ?.slice(0)
        .reverse()
        .map((meme) => (
          <Grid item xs={10} sm={5} md={4} key={meme.id}>
            <Meme
              id={meme.id}
              name={meme.name}
              description={meme.description}
              date={meme.date}
              dateAdded={meme.dateAdded}
              image={meme.image}
            />
          </Grid>
        ))}
    </Grid>
  )
}

export default MemeList
