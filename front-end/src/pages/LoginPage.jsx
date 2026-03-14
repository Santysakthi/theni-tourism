import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  Alert,
  InputAdornment,
  Link,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Lock as LockIcon,
  Login as LoginIcon,
} from '@mui/icons-material';
import { useLoginMutation } from '../services/authApi';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [login, { isLoading }] = useLoginMutation();
  const { login: setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const result = await login({ phone, password }).unwrap();
      setAuth(result.data?.token);
      navigate('/');
    } catch (err) {
      setErrorMsg(err?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <Box sx={{ minHeight: 'calc(100vh - 72px)', display: 'flex', alignItems: 'center', bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="xs">
        <Paper elevation={0} sx={{ p: { xs: 4, md: 6 }, borderRadius: 8, border: '1px solid', borderColor: 'divider' }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <Typography variant="h4" fontWeight={800} gutterBottom>Welcome Back</Typography>
            <Typography variant="body2" color="text.secondary">Log in to your Theni Tourism account</Typography>
          </Box>

          {errorMsg && (
            <Alert severity="error" sx={{ mb: 4, borderRadius: 3 }}>
              {errorMsg}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Phone Number"
                type="tel"
                fullWidth
                required
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PhoneIcon color="action" fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon color="action" fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={isLoading}
                startIcon={<LoginIcon />}
                sx={{ py: 1.5, mt: 2 }}
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </Stack>
          </form>

          <Typography variant="body2" align="center" sx={{ mt: 4, color: 'text.secondary' }}>
            Don't have an account?{' '}
            <Link component={RouterLink} to="/register" sx={{ fontWeight: 700, textDecoration: 'none' }}>
              Register now
            </Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
