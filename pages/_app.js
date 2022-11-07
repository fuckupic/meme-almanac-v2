import '../styles/globals.css'
import ParticlesStuff from '../components/ui/Particles'

import Layout from '../components/layout/Layout'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { withPasswordProtect } from 'next-password-protect'
import { UserProvider } from '@auth0/nextjs-auth0'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

const THEME = createTheme({
  typography: {
    fontFamily: `"Dosis", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    type: 'light',
    primary: {
      main: '#20cde4',
    },
    secondary: {
      main: '#ffff00',
    },
    error: {
      main: '#ff1300',
    },
    success: {
      main: '#00e676',
    },
  },
})

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider theme={THEME}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ParticlesStuff />
      </ThemeProvider>
    </UserProvider>
  )
}

export const getServerSideProps = withPageAuthRequired()
