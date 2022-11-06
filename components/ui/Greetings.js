import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const Greetings = () => {
  return (
    <div>
      <Box spacing={2} maxWidth={'40rem'}>
        <Stack
          spacing={2}
          borderRadius={'20px'}
          textAlign={'center'}
          sx={{
            px: 2,
            py: 4,
            bgColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: 3,
          }}
        >
          <Typography
            variant="h1"
            variantMapping="h2"
            color="initial"
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
