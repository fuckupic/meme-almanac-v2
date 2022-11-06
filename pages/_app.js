import '../styles/globals.css'
import ParticlesStuff from '../components/ui/Particles'

import Layout from '../components/layout/Layout'
import { Box, createTheme, ThemeProvider } from '@mui/material'
import { withPasswordProtect } from 'next-password-protect'

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
    <ThemeProvider theme={THEME}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ParticlesStuff />
    </ThemeProvider>
  )
}
