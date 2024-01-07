import { Card } from "@features/WeatherDashboard/components/UI";
import { Box, BoxProps, PaperProps, styled } from "@mui/material";

export const DetailsWrapper = styled(Card)<PaperProps>(
  ({ theme: { breakpoints } }) => ({
    justifyContent: "space-around",
    alignItems: "stretch",
    padding: "10px",
    margin: "20px 0",

    [breakpoints.up("lg")]: {
      margin: "0 50px",
    },
  })
);

export const RowContainer = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

    [breakpoints.down("lg")]: {
      padding: "10px",
    },
  })
);
