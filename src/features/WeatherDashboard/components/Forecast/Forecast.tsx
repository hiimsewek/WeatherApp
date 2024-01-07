import { ForecastData } from "@features/WeatherDashboard/types";
import { DashboardRow } from "@features/WeatherDashboard/components/UI";
import { ForecastDaily } from "./components/ForecastDaily";
import { ForecastHourly } from "./components/ForecastHourly";
import useForecast from "./useForecast";

type ForecastProps = {
  daily: ForecastData["daily"];
  hourly: ForecastData["hourly"];
  currentTime: string;
};

const Forecast = ({ daily, hourly, currentTime }: ForecastProps) => {
  const { setSelectedDay, preparedDaily, preparedHourly } = useForecast({
    daily,
    hourly,
    currentTime,
  });

  return (
    <DashboardRow>
      <ForecastDaily daily={preparedDaily} onSelect={setSelectedDay} />
      <ForecastHourly hourly={preparedHourly} />
    </DashboardRow>
  );
};

export default Forecast;
