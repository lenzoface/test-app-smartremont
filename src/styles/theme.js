import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00004B", // темно синий
      light: "#eaedf4", // серый
    },
    secondary: {
      main: "#D32F2F", // красный
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 0, // Set borderRadius to 0 globally
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Any global styles you want for buttons can be added here
          // Example: Disable uppercase transformation
          letterSpacing: '1px',
          
          border: 'none'
        
        },
      },
    },
  },
});

export default theme;
