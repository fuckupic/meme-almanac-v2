import React, { useRef } from 'react'
import Axios from 'axios'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Box, Stack, Button } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import moment from 'moment/moment'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import randomMemeName from '../components/functions/randomMemeName'

const newMeme = () => {
  const nameInputRef = useRef()
  const descriptionInputRef = useRef()
  const dateInputRef = useRef()
  const imageInputRef = useRef()
  const formRef = useRef()

  const [value, setValue] = React.useState(moment('2016-10-27'))

  async function submitHandler(event) {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value
    const enteredDate = moment(dateInputRef.current.value).format('YYYY-MM-DD')

    const data = await fetch('/api/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ enteredName, enteredDescription, enteredDate }),
    })
    formRef.current.reset()
    toast.success(
      `${
        randomMemeName().charAt(0).toUpperCase() + randomMemeName().slice(1)
      } úspěšně přidán!`
    )
  }

  return (
    <Stack spacing={5} fontFamily={'Dosis'}>
      <Stack textAlign={'left'} spacing={1}>
        <Typography variant="h1" color="initial" fontFamily={'Righteous'}>
          Přidat Memzu
        </Typography>
        <Typography variant="body1" color="initial">
          Vyplň údaje o memrákovi, které si pamatuješ. Popis obrázku zadej v
          angličtině.
        </Typography>
      </Stack>
      <form onSubmit={submitHandler} ref={formRef}>
        <Stack spacing={2}>
          <TextField label="Název" inputRef={nameInputRef} />
          <TextField label="Popis" inputRef={descriptionInputRef} />
          {/* <TextField label="Popis Obrázku (ENG)" inputRef={imageInputRef} /> */}
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              inputRef={dateInputRef}
              disableFuture
              label="Responsive"
              openTo="year"
              views={['year', 'month', 'day']}
              value={value}
              onChange={(newValue) => {
                setValue(newValue)
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button variant="contained" color="success" type="submit">
            Přidat memzáka
          </Button>
          <ToastContainer />
        </Stack>
      </form>
    </Stack>
  )
}

export default newMeme
