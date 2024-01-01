import { createTheme } from "@mui/material/styles";
import { COLORS } from "./colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: COLORS.blue700,
      light: COLORS.blue500,
      dark: COLORS.blue900,
      contrastText: COLORS.blue50,
    },

    paleblue: {
      main: COLORS.blue50,
      contrastText: COLORS.gray200,
    },
    grey: {
      200: COLORS.gray200,
      600: COLORS.gray600,
      900: COLORS.gray900,
    },

    background: {
      paper: COLORS.blue700,
      default: COLORS.blue700,
    },
    text: {
      primary: COLORS.blue50,
      disabled: COLORS.gray200,
    },
    divider: COLORS.blue50,
  },
  typography: {
    allVariants: {
      color: COLORS.blue50,
    },
  },
});
