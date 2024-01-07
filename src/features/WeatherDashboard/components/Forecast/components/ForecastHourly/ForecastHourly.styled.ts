import { Card } from "@features/WeatherDashboard/components/UI";
import { PaperProps, styled } from "@mui/material";
import { ResponsiveContainer, ResponsiveContainerProps } from "recharts";

export const HourlyWrapper = styled(Card)<PaperProps>(
  ({ theme: { breakpoints } }) => ({
    justifyContent: "space-around",
    alignItems: "stretch",
    padding: "10px",
    margin: "20px 0",

    [breakpoints.up("lg")]: {
      padding: "30px 40px",
      margin: "0 50px",
    },
  })
);

export const StyledChartContainer = styled(
  ResponsiveContainer
)<ResponsiveContainerProps>(({ theme: { breakpoints } }) => ({
  fontSize: "0.7rem",
  width: "100%",
  height: "100%",
  minHeight: "200px",

  [breakpoints.up("lg")]: {
    fontSize: "0.9rem",
  },
}));
