import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import LoadingButton from '@mui/lab/LoadingButton'

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState('');
  const [passwordErrText, setPasswordErrText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    setUsernameErrText('')
    setPasswordErrText('')
    console.log(e.target.username.value);
    const data = new FormData(e.target)
    const username = data.get('username').trim()
    const password = data.get('password').trim()

    let err = false

    if (username === '') {
      err = true
      setUsernameErrText('Please fill this field')
    }
    if (password === '') {
      err = true
      setPasswordErrText('Please fill this field')
    }

    if (err) return

    setLoading(true)

    try {
      const response = await fetch("http://localhost:8000/controller/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const resData = await response.json();
      localStorage.setItem('token', resData.token);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
      setUsernameErrText('Invalid credentials');
      setPasswordErrText('Invalid credentials');
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <Box
        component='form'
        sx={{ mt: 1 }}
        onSubmit={handleSubmit}
        noValidate
      >
        <TextField
          margin='normal'
          required
          fullWidth
          id='username'
          label='Username'
          name='username'
          disabled={loading}
          error={usernameErrText !== ''}
          helperText={usernameErrText}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='password'
          label='Password'
          name='password'
          type='password'
          disabled={loading}
          error={passwordErrText !== ''}
          helperText={passwordErrText}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='outlined'
          fullWidth
          color='success'
          type='submit'
          loading={loading}
        >
          Login
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/signup'
        sx={{ textTransform: 'none' }}
      >
        Don't have an account? Signup
      </Button>
    </>
  )
}

export default Login
