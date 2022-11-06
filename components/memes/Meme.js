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

import classes from './Meme.module.css'

import EditIcon from '@mui/icons-material/Edit'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
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
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgColor: 'rgba(255, 255, 255, 1)',
        backdropFilter: 'blur(3px)',
        borderRadius: '20px',
        border: '2px solid rgba(0, 0, 0, 1)',
        boxShadow: 3,
        padding: 2,
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
                  {randomMemeName().charAt(0).toUpperCase() +
                    randomMemeName().slice(1)}{' '}
                  {id}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  gutterTop
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
              sx={{ fontWeight: 'medium', fontFamily: 'Righteous' }}
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
              <Fab size="small" color="primary" aria-label="edit">
                <EditIcon />
              </Fab>
            </Tooltip>
            <Tooltip title="Smazat">
              <Fab size="small" color="error" aria-label="edit">
                <DeleteIcon />
              </Fab>
            </Tooltip>
          </Stack>
        </Box>
        <Box mt={2}>
          <Image
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
