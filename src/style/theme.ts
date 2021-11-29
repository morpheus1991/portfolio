const color = {
  white: "white",
  black: "black",
};
const size = {
  desktop: "768",
};

const theme = {
  color,
  media: {
    mobile: `(max-width: ${size.desktop}px)`,
    desktop: `(min-width: ${Number(size.desktop) + 1}px)`,
  },
};

export type Theme = typeof theme;

export default theme;
