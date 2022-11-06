import React from 'react'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
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
        <Stack
          spacing={2}
          direction="row"
          borderRadius={'20px'}
          textAlign={'center'}
          sx={{
            px: 2,
            py: 4,
          }}
        >
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={names}
            sx={{ width: 300 }}
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
            sx={{ width: 100 }}
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
          >
            Filtrovat
          </Button>
          {/* <a onClick={handleClick}> */}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddCircleOutlineRoundedIcon />}
            onClick={handleClick}
          >
            Přidat Memák
          </Button>
          {/* </a> */}
        </Stack>
      </form>
    </div>
  )
}

export default CreateBar
