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
          textTransform: "none", // Example: Disable uppercase transformation
        },
      },
    },
  },
});

export default theme;
