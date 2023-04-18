import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(true);
  const theme = getTheme(isDark);

  useEffect(() => {
    if (window.innerWidth >= 950) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="container-app">
        <AnimatePresence>
          {navIsOpen ? <MobileMenu setNavIsOpen={setNavIsOpen} /> : null}
        </AnimatePresence>
        <Header setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
        <Router isMobile={isMobile} />
      </div>
    </ThemeProvider>
  );
}

export default App;
