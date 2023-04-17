import React from "react";
import { motion } from "framer-motion";

const HeroBtn = () => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 7, duration: 1 }}
    >
      My Work
    </motion.button>
  );
};

export default HeroBtn;
