export const getTheme = (isDark) => {
  const theme = {
    main: isDark
      ? {
          primaryBG: "#282C34",
          secondaryBG: "#181818",
          accent: "#58AFEF",
          accentFilter: `brightness(0) saturate(100%) invert(78%) sepia(48%) saturate(4999%) hue-rotate(179deg)
                         brightness(101%) contrast(87%)`,
        }
      : {
          primaryBG: "#fff",
          secondaryBG: "#AEFFD8",
          accent: "#ac8887",
        },
    syntax: {
      green: "#14A76C",
      purple: "#AD78DD",
      lightBlue: "#58AFEF",
      darkBlue: "#528BFF",
      yellow: "#E6B424",
      softYellow: "#E5C07B",
      gold: "#CEB06C",
      orange: "#D38843",
      lightGray: "#5c636c",
      red: "#E06256",
      white: "#fff",
    },

    tech: {
      html: "#D84924",
      css: "#3C5EDF",
      js: "#EAD41C",
      react: "#5CCFEE",
      sass: "#C36291",
      node: "#84BB00",
      linux: "#168ECA",
    },
  };

  return theme;
};
