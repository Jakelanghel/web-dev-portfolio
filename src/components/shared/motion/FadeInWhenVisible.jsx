import React from "react";
import { motion } from "framer-motion";

// function FadeInWhenVisible({ children }) {
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       variants={{
//         visible: { opacity: 1, scale: 1 },
//         hidden: { opacity: 0, scale: 0 },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default FadeInWhenVisible;

function FadeInWhenVisible({ children, show }) {
  return (
    <motion.div
      initial="hidden"
      animate={show ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 5 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {show ? children : null}
    </motion.div>
  );
}

export default FadeInWhenVisible;
