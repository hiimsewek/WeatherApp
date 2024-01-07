import { Box, BoxProps, styled } from "@mui/material";

export const StyledRow = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [breakpoints.up("lg")]: {
      flexDirection: "row",
      alignItems: "stretch",
    },
  })
);
