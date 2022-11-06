import React, { useRef, useState } from 'react'
import Axios from 'axios'

import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { Box, Stack, Button } from '@mui/material'
import Input from '@mui/material/Input'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

import { Autocomplete } from '@mui/material'

import moment from 'moment/moment'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import randomMemeName from '../components/functions/randomMemeName'

const newMeme = () => {
  const dateOptions = ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
  const nameInputRef = useRef()
  const descriptionInputRef = useRef()
  const yearInputRef = useRef()
  const imageInputRef = useRef()
  const formRef = useRef()

  const [imageSrc, setImageSrc] = useState()
  const [uploadData, setUploadData] = useState()

  const [value, setValue] = React.useState(moment('2016-10-27'))

  async function submitHandler(event) {
    event.preventDefault()

    const enteredName = nameInputRef.current.value
    const enteredDescription = descriptionInputRef.current.value
    const enteredDate = yearInputRef.current.value
    const form = event.currentTarget
    var enteredImage = null

    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    )

    if (fileInput.files[0] !== undefined) {
      const formData = new FormData()
      for (const file of fileInput.files) {
        formData.append('file', file)
      }

      formData.append('upload_preset', 'meme-almanac')

      const imagedata = await fetch(
        'https://api.cloudinary.com/v1_1/dxdjkofgb/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      ).then((r) => r.json())

      setImageSrc(imagedata.secure_url)
      setUploadData(imagedata)

      enteredImage = imagedata.secure_url
    } else {
      enteredImage = 'none'
    }

    const data = await fetch('/api/memes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        enteredName,
        enteredDescription,
        enteredDate,
        enteredImage,
      }),
    })

    formRef.current.reset()
    setImageSrc(null)
    toast.success(
      `${
        randomMemeName().charAt(0).toUpperCase() + randomMemeName().slice(1)
      } úspěšně přidán!`
    )
  }
  function handleOnChange(changeEvent) {
    const reader = new FileReader()

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result)
      setUploadData(undefined)
    }

    reader.readAsDataURL(changeEvent.target.files[0])
  }

  return (
    <Box maxWidth={'40rem'} position={'relative'} sx={{ zIndex: 100 }}>
      <Stack alignContent={'center'} margin={'auto'}>
        <Stack
          spacing={5}
          fontFamily={'Dosis'}
          display={'flex'}
          alignItems={'start'}
        >
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
              <Typography variant="body1" color="initial">
                Vobrázek
              </Typography>
              <input type="file" name="file" onChange={handleOnChange} />

              <img src={imageSrc} />

              {/* {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )} */}
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={dateOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={yearInputRef}
                    inputRef={yearInputRef}
                    label="Rok"
                  />
                )}
              />
              <Button variant="contained" color="success" type="submit">
                Přidat memzáka
              </Button>
              <ToastContainer />
            </Stack>
          </form>
        </Stack>
      </Stack>
    </Box>
  )
}

export default newMeme
