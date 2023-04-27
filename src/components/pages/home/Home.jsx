import React, { useState, useEffect } from "react";
import { StyledHome } from "./Home.Styled";
import { Context } from "../../../Context";
import { AnimatePresence, motion } from "framer-motion";
import CodeBlockAnimated from "./code-block/code-block-animated/CodeBlockAnimated";
import About from "./about/About";
import Skills from "./skills/Skills";
import Hero from "./hero/Hero";

const Home2 = () => {
  const { isMobile, setShowFooter, setShowElements } =
    React.useContext(Context);
  const [codeBlockVisible, setCodeBlockVisible] = useState(true);
  const [HomeElementsVisible, setHomeElementsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleCodeBlockExit = () => {
    setCodeBlockVisible(false);
    setHomeElementsVisible(true);
    setShowFooter(true);
  };

  const handleHomeElementsExit = () => {
    setHomeElementsVisible(false);
  };

  const homeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: {
      opacity: 0,
    },
  };

  const codeBlockVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 0 },
    exit: {
      opacity: 0,
      transition: { duration: 5 },
    },
  };
  console.log(codeBlockVisible);
  return (
    <StyledHome className="home-page pg-pd">
      <AnimatePresence mode="wait">
        {codeBlockVisible ? (
          <motion.div
            key="codeBlock"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, transition: { duration: 8 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            onAnimationComplete={handleCodeBlockExit}
          >
            <CodeBlockAnimated />
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {HomeElementsVisible ? (
          <motion.div
            key="homeContent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.5, duration: 2 } }}
            className="home-content"
          >
            <Hero isMobile={isMobile} />
            <About />
            <Skills />
          </motion.div>
        ) : null}
      </AnimatePresence>
      {/* {!showElements ? (
        <CodeBlockAnimated initial="hidden" animate="visible" exit="exit" />
      ) : (
        <>
          <Hero isMobile={isMobile} />
          <About />
          <Skills />
        </>
      )} */}
    </StyledHome>
  );
};

export default Home2;
