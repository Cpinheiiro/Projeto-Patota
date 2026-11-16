import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Login } from "./containers/Login";
import GlobalStyles from "./styles/GlobalStyled";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />
    </ThemeProvider>
  </StrictMode>,
);
