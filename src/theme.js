import { responsiveFontSizes } from '@mui/material';
import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      dark: '#1d1834',
      light: '#7b519d',
      main: '#2e1a45',
      contrastText: '#fbce00'
    },
    secondary: {
      dark: '#3b5997',
      light: '#42c0fb',
      main: '#4099ff',
      contrastText: '#fff'
    },
    error: {
      dark: '#e0291d',
      light: '#fe8a7d',
      main: '#bf2131',
      contrastText: '#fff'
    },
    warning: {
      dark: '#fc9801',
      light: '#fbce00',
      main: '#ffad31',
      contrastText: '#1d1834'
    }
  },
  typography: {
    fontFamily: [
      'Mono',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'white',
            width: '10px'
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            backgroundColor: '#7b519d',
            border: '10px dotted #2e1a45',
            borderRadius: 3
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: '#2e1a45',
            border: '10px dotted #7b519d'
          },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active': {
            backgroundColor: '#2e1a45',
            border: '10px dotted #7b519d'
          },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#2e1a45',
            border: '10px dotted #7b519d'
          },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b'
          }
        }
      }
    }
  }
});
theme = responsiveFontSizes(theme);

export default theme;
