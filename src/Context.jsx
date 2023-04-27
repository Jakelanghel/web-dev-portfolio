import React, { useState } from "react";
import { useMediaQuery } from "./hooks/useMediaQuery";
import { getTheme } from "./theme/getTheme";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const theme = getTheme(isDark);

  const isMobile = useMediaQuery("(max-width: 800px)");

  return (
    <Context.Provider
      value={{
        isDark,
        setIsDark,
        navIsOpen,
        isMobile,
        setNavIsOpen,
        showElements,
        setShowElements,
        theme,
        showFooter,
        setShowFooter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
