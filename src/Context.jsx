import React, { useState, useEffect } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { getTheme } from "./theme/getTheme";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1000);
  const [showElements, setShowElements] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const theme = getTheme(isDark);

  useEffect(() => {
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1000);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setNavIsOpen(true);
    } else {
      setNavIsOpen(false);
    }
  }, [isDesktop]);
  console.log(isDesktop);

  return (
    <Context.Provider
      value={{
        isDark,
        setIsDark,
        navIsOpen,
        setNavIsOpen,
        showElements,
        setShowElements,
        theme,
        showFooter,
        setShowFooter,
        isDesktop,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
