import { createTheme } from '@mui/material/styles';

export const sam3MuiTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#52525b',
      light: '#a1a1aa',
      dark: '#27272a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#71717a',
      light: '#d4d4d8',
      dark: '#3f3f46',
      contrastText: '#ffffff',
    },
    background: {
      default: '#f1f5f9',
      paper: '#ffffff',
    },
    text: {
      primary: '#18181b',
      secondary: '#52525b',
    },
  },
  shape: {
    borderRadius: 10,
  },
});
