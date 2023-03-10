import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    // mode:'dark',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    openTitle: '#002f6c',
    protectedTitle: '#2bbd7e',
    type: 'light',
  },
});

export default theme;
