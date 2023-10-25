'use client';

import { Box, Button, Card, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    validatePassword(event.target.value);
  };

  const validatePassword = (value) => {
    setPasswordError(value.length >= 3 ? '' : 'A senha deve ter pelo menos 3 caracteres');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value);
  };

  const validateEmail = () => {
    setEmailError(email.length >= 3 ? '' : 'O email deve ter pelo menos 3 caracteres');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        background: 'linear-gradient(90deg, #0a2239 0%, #4b6a90 100%)',
      }}
    >
      <Card sx={{ padding: 2, maxWidth: 400 }}>
        <Typography sx={{ mb: '20px' }} variant="h5" gutterBottom>
          Iniciar sessão
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail}
          error={!!emailError}
          helperText={emailError}
        />
        <TextField
          label="Senha"
          variant="outlined"
          type="password"
          fullWidth
          sx={{ marginBottom: 2 }}
          value={password}
          onChange={handlePasswordChange}
          error={!!passwordError}
          helperText={passwordError}
        />
        <Button variant="contained" color="primary" fullWidth>
          Entrar
        </Button>
        <Button
          component={Link}
          href={`/register`}
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 1 }}
        >
          Criar conta
        </Button>
      </Card>
    </Box>
  );
}
