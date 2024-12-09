"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  spacing: 10,
  typography: {
    fontFamily: `'Jost', sans-serif`,
    htmlFontSize: 10,
    fontSize: 10,
  },
  palette: {
    primary: {
      main: "#003569",
    },
    secondary: {
      main: "#17414F",
      light: "#215D72",
      dark: "#2D3F59",
    },
    grey: {
      200: "#D9D9D9",
      300: "#727272",
      400: "#a6b8ca",
    },
    background: {
      paper: "#E2F5FB",
    },
  },
});

export default theme;
