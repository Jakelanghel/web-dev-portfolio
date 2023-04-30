export const getFontSize = () => {
  const screenWidth = screen.width;
  if (screenWidth < 375) {
    return "1rem";
  } else if (screenWidth < 400) {
    return "1.15rem";
  } else if (screenWidth < 800) {
    return "1.25rem";
  } else {
    return "1.5rem";
  }

  return screenWidth;
};
