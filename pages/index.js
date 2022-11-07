// our - domain.com
import { useRef, useState, useEffect } from 'react'
import useSwr from 'swr'
import ParticlesStuff from '../components/ui/Particles'

import CreateBar from '../components/ui/CreateBar'
import Greetings from '../components/ui/Greetings'
import Button from '@mui/material/Button'
import { Box, Stack } from '@mui/material'
import MemeList from '../components/memes/MemeList'
import { useUser } from '@auth0/nextjs-auth0'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

function HomePage() {
  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data, error } = useSwr('/api/memes', fetcher)
  // const { data, error } =
  // const [memes, setMemes] = useState(useSwr('/api/memes', fetcher))

  var years = data?.map((d) => new Date(d.date).getFullYear())
  years = [...new Set(years)]
  var names = data?.map((d) => d.name)

  const [newMemes, setNewMemes] = useState()
  const memeRef = useRef()

  return (
    <div>
      <Box
        className="mainContent"
        fontFamily={'Dosis'}
        position={'relative'}
        sx={{ zIndex: 100 }}
      >
        <Stack alignItems={'center'}>
          <Greetings memes={data}></Greetings>
          <CreateBar date={years} names={names}></CreateBar>
          <MemeList memes={data}></MemeList>
        </Stack>
      </Box>
    </div>
  )
}

export default HomePage

// export const getServerSideProps = withPageAuthRequired()
