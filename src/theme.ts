import { createTheme } from "@mui/material/styles";

// A Primary/Light theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
      dark: "#303F9F", //"#002984"
      light: "#C5CAE9", //"#757de8"
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
      contrastText: "#000000",
    },
    error: {
      main: "#ff1744",
    },
    success: {
      main: "#00e676",
    },
  },
});

export default theme;
