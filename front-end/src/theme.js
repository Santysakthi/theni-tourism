import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#4caf50',
      main: '#2e7d32', // Forest Green
      dark: '#1b5e20',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff263',
      main: '#fbc02d', // Safari Yellow/Gold
      dark: '#c49000',
      contrastText: '#000',
    },
    background: {
      default: '#f8fbf8', // Light Sage
      paper: '#ffffff',
    },
    text: {
      primary: '#1b3022', // Dark Jungle Green
      secondary: '#455a64',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 800,
      color: '#1b3022',
    },
    h2: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
      color: '#1b3022',
    },
    h3: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Outfit", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 28px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(46, 125, 50, 0.2)',
          },
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(46, 125, 50, 0.05)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});

export default theme;
