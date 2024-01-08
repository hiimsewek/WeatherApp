import { useTheme } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { HourlyWrapper, StyledChartContainer } from "./ForecastHourly.styled";

type ForecastHourly = {
  hourly: {
    temperature: number;
    time: string;
  }[];
};

const ForecastHourly = ({ hourly }: ForecastHourly) => {
  const { palette } = useTheme();

  return (
    <HourlyWrapper>
      <StyledChartContainer>
        <LineChart data={hourly}>
          <XAxis dataKey="time" stroke={palette.primary.contrastText} />
          <YAxis
            stroke={palette.primary.contrastText}
            width={20}
            allowDecimals={false}
          />
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: palette.primary.light,
              textAlign: "center",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="temperature"
            stroke={palette.primary.contrastText}
            strokeWidth={2}
          />
        </LineChart>
      </StyledChartContainer>
    </HourlyWrapper>
  );
};

export default ForecastHourly;
