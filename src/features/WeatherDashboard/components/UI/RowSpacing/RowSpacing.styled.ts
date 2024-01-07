import { Box, BoxProps, styled } from "@mui/material";

export const StyledSpacing = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    [breakpoints.up("lg")]: {
      margin: "50px 0",
    },
  })
);
