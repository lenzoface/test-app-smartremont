import { createTheme } from '@mui/material/styles';

// Create a theme with red as the primary color
const theme = createTheme({
  palette: {
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
  shape: {
    borderRadius: 0, // Set borderRadius to 0 globally
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
  },
});

export default theme;
