import '../styles/globals.css'

import Layout from '../components/layout/Layout'
import { createTheme, ThemeProvider } from '@mui/material'

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

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
