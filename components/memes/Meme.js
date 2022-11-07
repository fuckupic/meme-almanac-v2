import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import randomMemeName from '../functions/randomMemeName'
import Image from 'mui-image'
import Link from 'next/link'
import { Modal } from '@mui/material'
import { useRouter } from 'next/router'
import toast, { ToastContainer } from 'react-toastify'

import classes from './Meme.module.css'

import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ReplyIcon from '@mui/icons-material/Reply'
import NumbersRoundedIcon from '@mui/icons-material/NumbersRounded'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import Tooltip from '@mui/material/Tooltip'
import Fab from '@mui/material/Fab'
import { borderRadius } from '@mui/system'

const deepai = require('deepai')
deepai.setApiKey('ac5e71f6-5e75-44e7-b465-5b622aa5ea89')

export default function Meme({
  id,
  name,
  description,
  date,
  image,
  dateAdded,
}) {
  const router = useRouter()
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'error.dark',
    border: '2px solid #000',
    borderRadius: '16px',
    boxShadow: 24,
    color: 'error.contrastText',
    p: 4,
  }

  const theme = useTheme()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const numId = parseInt(id)

  const handleDelete = async () => {
    const data = await fetch(`/api/memes?id=${numId}`, {
      method: 'DELETE',
    })
    router.reload(window.location.pathname)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backdropFilter: 'blur(12px)',
        borderRadius: '20px',
        border: '2px solid rgba(0, 0, 0, 1)',
        boxShadow: 3,
        padding: 2,
      }}
    >
      <ToastContainer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            textAlign={'center'}
            mb={2}
          >
            Tento {randomMemeName()} se smaže. Chcete to tak?
          </Typography>
          <Stack
            direction={'row'}
            spacing={2}
            alignContent={'center'}
            justifyContent={'center'}
          >
            <Fab
              color="error"
              aria-label=""
              variant="extended"
              onClick={handleDelete}
            >
              <DeleteIcon />
              Smazat
            </Fab>
            <Fab
              color="primary"
              aria-label=""
              variant="extended"
              onClick={handleClose}
            >
              <ReplyIcon />
              Jít zpět
            </Fab>
          </Stack>
        </Box>
      </Modal>
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
                  {randomMemeName().charAt(0).toUpperCase() +
                    randomMemeName().slice(1)}{' '}
                  {id}
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
                  {date}
                </Typography>
              </Stack>
            </Stack>
            <Typography
              sx={{ fontWeight: 'medium', fontFamily: 'Roboto' }}
              component="div"
              variant="h5"
            >
              {name}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </Stack>
        </Box>
        <Box
          padding={3}
          sx={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Stack direction={'row'} spacing={1}>
            <Tooltip title="Upravit">
              <Link href={`/edit-meme/${id}`}>
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon />
                </Fab>
              </Link>
            </Tooltip>
            <Tooltip title="Smazat">
              <Fab
                size="small"
                color="error"
                aria-label="edit"
                onClick={handleOpen}
              >
                <DeleteIcon />
              </Fab>
            </Tooltip>
          </Stack>
        </Box>
        <Box mt={2}>
          <Image
            alt=""
            src={image}
            fit="contain"
            showLoading={true}
            sx={{ borderRadius: '10px', border: '2px solid rgba(0, 0, 0, 1)' }}
          />
        </Box>
      </Box>
    </Box>
  )
}
