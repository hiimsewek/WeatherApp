import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import { globalStyles, theme } from "@styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyles} />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
