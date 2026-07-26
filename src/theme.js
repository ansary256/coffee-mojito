import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'rgba(0, 0, 0, 0.92)',
      paper: '#121212',
    },
    primary: {
      main: '#e7d393',
    },
    text: {
      primary: '#F5F2EB',
      secondary: '#C8C3B8',
    }
  },
  typography: {
    fontFamily: 'Vazirmatn, "Mona Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      fontFamily: 'Vazirmatn, "Mona Sans", sans-serif',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body, button, input, textarea, select {
          font-family: 'Vazirmatn', "Mona Sans", "Roboto", sans-serif !important;
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Vazirmatn, "Mona Sans", sans-serif',
        },
      },
    },
  },
});

export default theme;