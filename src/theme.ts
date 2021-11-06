import { createTheme } from "@mui/material/styles";

// A Primary/Light theme for this app
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3F51B5",
      dark: "#303F9F", //"#002984"
      light: "#C5CAE9", //"#757de8"
    },
    secondary: {
      main: "#F44336",
      light: "#FF7961",
      dark: "#BA000D",
    },
    error: {
      main: "#FF1744",
    },
    success: {
      main: "#00E676",
    },
    background: {
      default: "#F1F2F5",
    },
  },
  typography: {
    fontFamily: "Helvetica",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: "35px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.2rem",
      lineHeight: "30px",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.8rem",
      lineHeight: "20px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: "18px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.4rem",
      lineHeight: "18px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: "20px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "1.2rem",
      lineHeight: "2rem",
    },
    caption: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "20px",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3F51B5",
      dark: "#303F9F", //"#002984"
      light: "#C5CAE9", //"#757de8"
    },
    secondary: {
      main: "#F44336",
      light: "#FF7961",
      dark: "#BA000D",
    },
    error: {
      main: "#FF1744",
    },
    warning: {
      main: "#FDDD48",
    },
    success: {
      main: "#00E676",
    },
    background: {
      default: "#22252B",
    },
  },
  typography: {
    fontFamily: "Helvetica",
    h1: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: "35px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2.2rem",
      lineHeight: "30px",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.8rem",
      lineHeight: "20px",
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.6rem",
      lineHeight: "18px",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.4rem",
      lineHeight: "18px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "1.4rem",
      lineHeight: "20px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "1.1rem",
      lineHeight: "2rem",
    },
    caption: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "20px",
    },
  },
});

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
