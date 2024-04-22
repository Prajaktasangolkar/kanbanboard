import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined'
import { Box, IconButton, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
// import boardApi from '../api/boardApi'
// import EmojiPicker from '../components/common/EmojiPicker'
// import Kanban from '../components/common/Kanban'
// import { setBoards } from '../redux/features/boardSlice'
// import { setFavouriteList } from '../redux/features/favouriteSlice'

const Board = () => {
  return (
    <>
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }}>
      <IconButton variant='outlined'>
        {/* {
          isFavourite ? (
            <StarOutlinedIcon color='warning' />
          ) : (
            <StarBorderOutlinedIcon />
          )
        } */}
      </IconButton>
      <IconButton variant='outlined' color='error' >
        <DeleteOutlinedIcon />
      </IconButton>
    </Box>
    <Box sx={{ padding: '10px 50px' }}>
      <Box>
        {/* emoji picker */}
        {/* <EmojiPicker  /> */}
        <TextField
        //   value={title}
        //   onChange={updateTitle}
          placeholder='Untitled'
          variant='outlined'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-input': { padding: 0 },
            '& .MuiOutlinedInput-notchedOutline': { border: 'unset ' },
            '& .MuiOutlinedInput-root': { fontSize: '2rem', fontWeight: '700' }
          }}
        />
        <TextField
        //   value={description}
        //   onChange={updateDescription}
          placeholder='Add a description'
          variant='outlined'
          multiline
          fullWidth
          sx={{
            '& .MuiOutlinedInput-input': { padding: 0 },
            '& .MuiOutlinedInput-notchedOutline': { border: 'unset ' },
            '& .MuiOutlinedInput-root': { fontSize: '0.8rem' }
          }}
        />
      </Box>
      <Box>
        {/* Kanban board */}
        {/* <Kanban /> */}
      </Box>
    </Box>
  </>
  )
}

export default Board