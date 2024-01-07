import { Card } from "@features/WeatherDashboard/components/UI";
import {
  Box,
  BoxProps,
  ButtonBase,
  ButtonBaseProps,
  CardMedia,
  CardMediaProps,
  PaperProps,
  styled,
} from "@mui/material";

export const DailyWrapper = styled(Card)<PaperProps>(
  ({ theme: { breakpoints } }) => ({
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 10px",
    overflow: "scroll",
    scrollbarWidth: "none",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&-ms-overflow-style:": {
      display: "none",
    },

    [breakpoints.up("lg")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      width: "350px",
      padding: "10px 0",
      overflow: "auto",
    },
  })
);

export const DailyItem = styled(ButtonBase)<
  ButtonBaseProps & { active: number }
>(({ theme: { palette, breakpoints }, active }) => ({
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 10px",
  backgroundColor: active ? palette.primary.light : "transparent",
  fontSize: "0.7rem",
  width: "90px",
  [breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "0px 10px",
    fontSize: "0.9rem",

    "&:hover": {
      backgroundColor: active ? palette.primary.light : "rgba(0, 0, 0, 0.04)",
      transition: "backgroundColor 0.3s",
    },
  },
}));

export const StyledImage = styled(CardMedia)<CardMediaProps>(
  ({ theme: { breakpoints } }) => ({
    height: "50px",
    width: "50px",

    [breakpoints.up("lg")]: {
      width: "60px",
      height: "60px",
    },
  })
);

export const TempContainer = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  })
);

export const DayContainer = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    [breakpoints.up("lg")]: {
      width: "100px",
    },
  })
);
