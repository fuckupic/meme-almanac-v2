import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const Greetings = () => {
  return (
    <div>
      <Box spacing={2} maxWidth={'40em'} m={'auto'}>
        <Stack
          spacing={2}
          borderRadius={'20px'}
          textAlign={'center'}
          sx={{
            px: 2,
            py: 4,
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            border: '2px solid rgba(0, 0, 0, 1)',
            boxShadow: 3,
            maxWidth: '80%',
            margin: 'auto',
            mb: 5,
          }}
        >
          <Typography
            variant="h1"
            color="initial"
            fontSize={52}
            fontFamily={'Righteous'}
          >
            Vítej v knize memásků
          </Typography>
          <Typography variant="body1" color="initial">
            Sem můžeme vkládat všechny naše memrouše, abychom na ně nezapomněli.{' '}
            <br></br>
            Lavja very mač!
            <br></br>
            <br></br>
            <b>Krásný výročí, Beruško</b>
          </Typography>
        </Stack>
      </Box>
    </div>
  )
}

export default Greetings
