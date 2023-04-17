import React, { useState } from "react";
import { GlobalStyles } from "./components/shared/global";
import { ThemeProvider } from "styled-components";
import { getTheme } from "./theme/getTheme";
import Router from "./components/router/Router";
import Header from "./components/header/Header";
import MobileMenu from "./components/header/nav/mobile-nav/MobileNav";

import { AnimatePresence } from "framer-motion";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const theme = getTheme(isDark);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="container-app">
        <AnimatePresence>
          {navIsOpen ? <MobileMenu setNavIsOpen={setNavIsOpen} /> : null}
        </AnimatePresence>
        <Header setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
        <Router />
      </div>
    </ThemeProvider>
  );
}

export default App;
