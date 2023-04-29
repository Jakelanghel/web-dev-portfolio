import React, { useContext } from "react";
import { Context } from "./Context";
import { GlobalStyles } from "./components/shared/global";
import { ThemeProvider } from "styled-components";
import Router from "./components/router/Router";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const { showFooter, theme } = useContext(Context);

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
