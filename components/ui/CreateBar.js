import React from 'react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import TextField from '@mui/material/TextField'
import { Autocomplete } from '@mui/material'

const CreateBar = ({ date, names, filterMemes }) => {
  const router = useRouter()

  const yearRef = React.useRef()
  const nameRef = React.useRef()

  async function handleFilter(event) {
    event.preventDefault()

    if (yearRef.current.value) {
      const enteredDate = yearRef.current.value
    }
    const enteredName = nameRef.current.value

    const data = await fetch('/api/memes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ enteredDate, enteredName }),
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push('new-meme')
  }
  return (
    <div>
      <form onSubmit={filterMemes}>
        <Grid
          container
          rowSpacing={{ xs: 4, sm: 4, md: 2 }}
          columnSpacing={{ xs: 2, sm: 2, md: 2 }}
          textAlign={'center'}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{
            px: 2,
            py: 4,
          }}
        >
          <Grid item xs={10} sm={8} md={8}>
            <Stack direction={'row'} spacing={2}>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={names}
                sx={{
                  width: 200,
                  backdropFilter: 'blur(12px)',
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={nameRef}
                    label="Název"
                    InputProps={{
                      ...params.InputProps,
                      type: 'search',
                    }}
                  />
                )}
              />
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={date}
                sx={{
                  backdropFilter: 'blur(12px)',
                }}
                renderInput={(params) => (
                  <TextField {...params} value={yearRef} label="Rok" />
                )}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleFilter}
                startIcon={<FilterAltIcon />}
                sx={{
                  border: '2px solid #000',
                }}
              >
                Filtrovat
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={10} sm={5} md={4}>
            {/* <a onClick={handleClick}> */}
            <Button
              variant="contained"
              color="secondary"
              startIcon={<AddCircleOutlineRoundedIcon />}
              onClick={handleClick}
              sx={{
                border: '2px solid #000',
              }}
            >
              Přidat Memák
            </Button>
          </Grid>
          {/* </a> */}
        </Grid>
      </form>
    </div>
  )
}

export default CreateBar
