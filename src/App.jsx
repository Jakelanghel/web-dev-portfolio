import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence } from "framer-motion";

import { Context } from "./Context";
import { GlobalStyles } from "./components/shared/global";
import { ThemeProvider } from "styled-components";

import Router from "./components/router/Router";
import Header from "./components/header/Header";
import MobileMenu from "./components/header/nav/mobile-nav/MobileNav";
import Footer from "./components/footer/Footer";

function App() {
  const { navIsOpen, showElements, setShowElements, theme } =
    useContext(Context);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="container-app">
        <AnimatePresence>{navIsOpen ? <MobileMenu /> : null}</AnimatePresence>
        <Header />
        <Router />
        {showElements ? <Footer /> : null}
      </div>
    </ThemeProvider>
  );
}

export default App;
