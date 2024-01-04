import { Box, BoxProps, Grid, GridProps, styled } from "@mui/material";

export const AppContainer = styled(Grid)<GridProps>(() => ({
  padding: "20px",
}));

export const Wrapper = styled(Grid)<GridProps>(() => ({
  flexWrap: "nowrap",
}));

export const LocationSearchOuterContainer = styled(Grid)<GridProps>(() => ({
  flexGrow: 1,
}));

export const LocationSearchInnerContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
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
