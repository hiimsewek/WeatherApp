import { Box, BoxProps, styled } from "@mui/material";

export const AppContainer = styled(Box)<BoxProps>(() => ({
  padding: "10px",
}));

export const Header = styled(Box)<BoxProps>(() => ({
  flexWrap: "nowrap",
  display: "flex",
  flexDirection: "row",
}));

export const SearchContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "center",
  position: "relative",
  "& .MuiBox-root": {
    width: "100%",
  },
  "& .css-143rofo-MuiButtonBase-root-MuiIconButton-root": {
    position: "absolute",
    top: 0,
    right: 0,
  },
}));

export const DashboardContainer = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    margin: "10px 8px",

    [breakpoints.up("lg")]: {
      margin: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "calc(100vh - 80px)",
    },
  })
);
