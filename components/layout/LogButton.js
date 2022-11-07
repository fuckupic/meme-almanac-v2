import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'

const LogButton = ({ user, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>
  }
  if (user) {
    return (
      <Link href="/api/auth/logout" sx={{ textDecoration: 'none' }}>
        <Button variant="contained" color="info">
          Odhlásit se
        </Button>
      </Link>
    )
  }
  return (
    <Link href="/api/auth/login" sx={{ textDecoration: 'none' }}>
      <Button variant="contained" color="info">
        Přihlásit se
      </Button>
    </Link>
  )
}

export default LogButton
