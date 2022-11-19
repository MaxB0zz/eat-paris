import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {theme} from "./style/theme"
import {ThemeProvider} from "@mui/material";
import Navigation from "./tools/Navigation";

const App: React.FC = () => {
  return (
      <ThemeProvider theme={theme}>
          <NavBar/>
          <Navigation/>
      </ThemeProvider>
  );
}

export default App;
