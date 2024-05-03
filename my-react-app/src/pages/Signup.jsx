import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';

const Signup = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [usernameErrText, setUsernameErrText] = useState('');
  const [passwordErrText, setPasswordErrText] = useState('');
  const [confirmPasswordErrText, setConfirmPasswordErrText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameErrText('');
    setPasswordErrText('');
    setConfirmPasswordErrText('');

    const formData = new FormData(e.target);
    const username = formData.get('username').trim();
    const password = formData.get('password').trim();
    const confirmPassword = formData.get('confirmPassword').trim();

    if (!username) {
      setUsernameErrText('Please fill this field');
      return;
    }

    if (!password) {
      setPasswordErrText('Please fill this field');
      return;
    }

    if (!confirmPassword) {
      setConfirmPasswordErrText('Please fill this field');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordErrText('Confirm password does not match');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/controller/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/');
    } catch (error) {
      console.error('Signup error:', error);
      // Handle error messages if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div style={{    
       fontSize: '60px',
       fontWeight: 'bold',
       justifyContent: 'center',
       alignItems: 'center',
       display: 'flex',
       flexDirection: 'column'
       }}>
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
        <TextField
          margin='normal'
          required
          fullWidth
          id='confirmPassword'
          label='Confirm Password'
          name='confirmPassword'
          type='password'
          disabled={loading}
          error={confirmPasswordErrText !== ''}
          helperText={confirmPasswordErrText}
        />
        <LoadingButton
          sx={{ mt: 3, mb: 2 }}
          variant='outlined'
          fullWidth
          color='success'
          type='submit'
          loading={loading}
        >
          Signup
        </LoadingButton>
      </Box>
      <Button
        component={Link}
        to='/login'
        sx={{ textTransform: 'none' }}
      >
        Already have an account? Login
      </Button>
      </div>
    </>
  );
};

export default Signup;
