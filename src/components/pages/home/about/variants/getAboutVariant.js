export const getAboutVariant = (isMobile) => {
  const navVariant = !isMobile
    ? {
        hidden: { y: -2000 },
        visible: { y: 0, transition: { ease: "easeIn", duration: 0.5 } },
      }
    : {
        hidden: { x: 0, y: 0 },
        visible: { x: 0, y: 0 },
      };

  return navVariant;
};
