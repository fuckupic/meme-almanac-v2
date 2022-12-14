import * as React from 'react'
import { styled } from '@mui/material/styles'
import { alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import LogButton from './LogButton'
// import SearchIcon from '@mui/icons-material/Search'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '150%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const NavBar = ({ user, isLoading }) => {
  const router = useRouter()

  return (
    <Box
      sx={{ flexGrow: 1, backgroundColor: 'red', zIndex: 100 }}
      position={'relative'}
    >
      <AppBar position="static">
        <Toolbar sx={{ flexGrow: 1, backgroundColor: 'black' }}>
          <Stack direction={'row'} width="100%" justifyContent="space-between">
            <Link href="/" passHref>
              <Typography
                variant="h4"
                noWrap
                component="div"
                color={'white'}
                sx={{
                  flexGrow: 2,
                  display: { sm: 'block' },
                  fontFamily: 'Roboto',
                  fontWeight: 'bold',
                }}
              >
                Kniha Mem??
              </Typography>
            </Link>
            {/* <LogButton user={user} isLoading={isLoading} /> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
