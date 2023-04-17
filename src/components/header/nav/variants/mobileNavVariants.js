export const mobileNavVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      opacity: { duration: 0.3 },
      height: { duration: 0.3, delay: 0.2 },
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.3, delay: 0.2 },
      height: { duration: 0.3 },
    },
  },
};
