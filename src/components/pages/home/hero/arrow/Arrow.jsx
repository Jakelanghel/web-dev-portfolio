import React from "react";
import { motion } from "framer-motion";
import { Context } from "../../../../../Context";

const Arrow = () => {
  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        delay: 1,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const { theme } = React.useContext(Context);

  return (
    <div className="container-arrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-10 0 420 540"
        className="arrow"
      >
        <motion.path
          d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"
          stroke={theme.main.accent}
          strokeWidth="10"
          fill="none"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
    </div>
  );
};

export default Arrow;
