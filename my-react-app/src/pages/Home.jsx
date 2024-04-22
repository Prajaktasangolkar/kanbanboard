import React from 'react'
import { Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const [loading,setLoading]=useState(false);
  
  return (
    <>Hiii</>
  )
}

export default Home