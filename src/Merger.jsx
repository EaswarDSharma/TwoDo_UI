import Add from './Add'
import Comp from './Comp'
import Notcomp from './Notcomp';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import SpedDial from "./SpedDial";

function Merger() {
  const storedDarkMode = (localStorage.getItem("dark-Mode")==="true")

  const themeLight = createTheme({
    palette: {
      background: {
        default: "#b0a0e2",
      },
    },
  });

  const themeDark = createTheme({
    palette: {
      background: {
        default: "#616161",
      },
    },
  });
  var t = storedDarkMode ? themeDark:themeLight
//console.log(storedDarkMode)
  return (
   <>
      <ThemeProvider
          theme={ t }>
      <CssBaseline />

      <Add />
      <Comp />
      <Notcomp/>
      </ThemeProvider>
   </>
  );
}

export default Merger;
