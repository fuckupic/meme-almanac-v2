import React, { useState, useRef } from 'react'
import useSwr from 'swr'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import randomMemeName from '../../components/functions/randomMemeName'
import Image from 'mui-image'
import { TextField } from '@mui/material'
import { Autocomplete } from '@mui/material'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

import { useTheme } from '@mui/material/styles'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded'
import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'
import { useRouter } from 'next/router'
import Meme from '../../components/memes/Meme'
import { useEffect } from 'react'

const editMeme = () => {
  const dateOptions = ['2016', '2017', '2018', '2019', '2020', '2021', '2022']
  const router = useRouter()
  const id = router.query.meme

  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data, error } = useSwr(`/api/meme/${id}`, fetcher)

  const moment = require('moment')

  const date = data?.date
  const [newDate, setNewDate] = useState()
  const dateInputRef = useRef()

  function handleDateOnChange(changeEvent) {
    setNewDate(changeEvent.target.value)
  }

  const description = data?.description
  const [newDescription, setNewDescription] = useState()
  const descriptionInputRef = useRef()

  function handleDescriptionOnChange(changeEvent) {
    setNewDescription(changeEvent.target.value)
  }

  const image = data?.image

  const name = data?.name
  const [newName, setNewName] = useState()
  const nameInputRef = useRef()

  function handleNameChange(changeEvent) {
    setNewName(changeEvent.target.value)
  }

  const formRef = useRef()

  const [imageSrc, setImageSrc] = useState()
  const [uploadData, setUploadData] = useState()

  const [value, setValue] = React.useState(moment('2016-10-27'))

  async function submitHandler(event) {
    event.preventDefault()

    const enteredName = newName
    const enteredDescription = newDescription
    var isdateValid = false
    var enteredDate

    for (let index = 0; index < dateOptions.length; index++) {
      const element = dateOptions[index]
      if (dateInputRef.current.value === element) {
        isdateValid = true
        enteredDate = dateInputRef.current.value
      }
    }

    if (isdateValid === false) {
      enteredDate = null
    }

    const form = event.currentTarget
    var enteredImage = null

    console.info(enteredDate)
    console.log(enteredDate)

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
      enteredImage = null
    }

    const data = await fetch(`/api/memes?id=${id}`, {
      method: 'PUT',
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

    // formRef.current.reset()
    // setImageSrc(null)
    toast.success(
      `${
        randomMemeName().charAt(0).toUpperCase() + randomMemeName().slice(1)
      } úspěšně upraven!`
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
    <Box
      sx={{
        position: 'relative',
        zIndex: 1000,
      }}
    >
      <Typography
        variant="h2"
        color="initial"
        textAlign={'center'}
        fontFamily="Righteous"
        sx={{ fontSize: '3rem' }}
        mb={2}
      >
        Upravovaný memza
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          backdropFilter: 'blur(12px)',
          borderRadius: '20px',
          border: '2px solid rgba(0, 0, 0, 1)',
          boxShadow: 3,
          padding: 2,
          margin: 'auto',
          maxWidth: '50%',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: '1 0 auto' }}>
            <Stack spacing={1}>
              <Stack direction={'row'} spacing={1}>
                <Stack
                  direction={'row'}
                  backgroundColor="primary.main"
                  sx={{
                    borderRadius: '10px',
                    border: '2px solid rgba(0, 0, 0, 1)',
                    px: 1,
                    py: 0.2,
                    pr: 2,
                  }}
                >
                  <NumbersRoundedIcon fontSize="small" color="text.secondary" />
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontWeight: 'bold',
                    }}
                    color="text.primary"
                  >
                    Memza {id}
                  </Typography>
                </Stack>
                <Stack>
                  <Typography
                    sx={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      backgroundColor: 'secondary.main',
                      borderRadius: '10px',
                      border: '2px solid rgba(0, 0, 0, 1)',
                      px: 1.25,
                      py: 0.2,
                      // py: 0.5,
                    }}
                    color="text.primary"
                  >
                    {!newDate && date}
                    {newDate && newDate}
                  </Typography>
                </Stack>
              </Stack>
              <Typography
                sx={{ fontWeight: 'medium', fontFamily: 'Righteous' }}
                component="div"
                variant="h5"
              >
                {!newName && name}
                {newName && newName}
              </Typography>
              <Typography variant="body2">
                {!newDescription && description}
                {newDescription && newDescription}
              </Typography>
            </Stack>
          </Box>
          <Box mt={2}>
            {!imageSrc && (
              <Image
                src={image}
                fit="contain"
                showLoading={true}
                sx={{
                  borderRadius: '10px',
                  border: '2px solid rgba(0, 0, 0, 1)',
                }}
              />
            )}
            {imageSrc && (
              <Image
                src={imageSrc}
                fit="contain"
                showLoading={true}
                sx={{
                  borderRadius: '10px',
                  border: '2px solid rgba(0, 0, 0, 1)',
                }}
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box alignContent={'center'} justifyContent={'center'} mt={4}>
        <form onSubmit={submitHandler} ref={formRef}>
          <Stack
            spacing={2}
            sx={{
              maxWidth: '50%',
              alignContent: 'center',
              justifyContent: 'center',
              margin: 'auto',
            }}
          >
            <TextField
              sx={{
                backdropFilter: 'blur(50px)',
                backgroundColor: 'rgba(255,253,1, 0.5)',
              }}
              label="Název"
              onChange={handleNameChange}
              inputRef={nameInputRef}
            />
            <TextField
              sx={{
                backdropFilter: 'blur(50px)',
                backgroundColor: 'rgba(255,253,1, 0.5)',
              }}
              label="Popis"
              onChange={handleDescriptionOnChange}
              inputRef={descriptionInputRef}
            />

            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={dateOptions}
              renderInput={(params) => (
                <TextField
                  sx={{
                    backdropFilter: 'blur(50px)',
                    backgroundColor: 'rgba(255,253,1, 0.5)',
                  }}
                  {...params}
                  onChange={handleDateOnChange}
                  inputRef={dateInputRef}
                  label="Rok"
                />
              )}
            />
            <Typography variant="body1" color="initial">
              Vobrázek
            </Typography>
            <input type="file" name="file" onChange={handleOnChange} />
            <ToastContainer />
            <Button variant="contained" color="primary" type="submit">
              Upravit memzáka
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  )
}

export default editMeme
