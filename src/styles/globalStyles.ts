import { COLORS } from "./colors";

export const globalStyles = {
  "*": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  body: {
    minHeight: "100vh",
    background: `linear-gradient(135deg, ${COLORS.blue300} , ${COLORS.blue400})`,
    backgroundRepeat: "no-repeat",
  },
};
