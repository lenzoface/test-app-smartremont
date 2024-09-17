import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme with red as the primary color
const theme = createTheme({
  palette: {
    primary: {
      main: red[500], // This makes buttons and other primary elements red
    },
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
