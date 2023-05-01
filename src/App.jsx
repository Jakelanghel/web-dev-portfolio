import React, { useContext, useEffect } from "react";
import { Context } from "./Context";
import { GlobalStyles } from "./components/shared/global";
import { ThemeProvider } from "styled-components";
import Router from "./components/router/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const { showFooter, setShowFooter, theme } = useContext(Context);
  const location = useLocation();

  useEffect(() => {
    // Check if the current route is the home page
    if (location.pathname === "/") {
      setShowFooter(false);
    } else {
      setShowFooter(true);
    }
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <div className="container-app">
        <Header />
        <Router />
        {showFooter ? <Footer /> : null}
      </div>
    </ThemeProvider>
  );
}

export default App;
