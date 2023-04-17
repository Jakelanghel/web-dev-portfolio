import React, { useState } from "react";
import { GlobalStyles } from "./components/shared/global";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./theme/getTheme";
import Router from "./components/router/Router";
import Header from "./components/header/Header";

function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = getTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Router />
    </ThemeProvider>
  );
}

export default App;
