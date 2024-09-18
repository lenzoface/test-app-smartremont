import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';


// Define your dark blue color
const darkBlue = blue[900]; // Example dark blue color

// Create a theme with red as the primary color
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00004B',
    },
    secondary: {
      main: '#D32F2F',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Any global styles you want for buttons can be added here
          textTransform: 'none',  // Example: Disable uppercase transformation
        },
      },
    },
    MuiTypography: {
      fontWeightBold: {
        color: darkBlue,
      },
    }
  },
});

export default theme;
