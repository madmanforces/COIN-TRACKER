import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";


const darkTheme = {
  textColor: "white",
  backgroundColor: "black",
};

const lightTheme = {
  textColor: "black",
  backgroundColor: "white",
};


ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
