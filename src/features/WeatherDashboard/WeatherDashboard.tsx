import {
  AnimatePresence,
  RowSpacing,
  ErrorScreen,
  LoadingScreen,
} from "./components/UI";
import { CurrentWeather, Forecast } from "./components";
import useWeatherDashboard from "./useWeatherDashboard";

const WeatherDashboard = () => {
  const { data, isError, isFetching, locationName, refetch } =
    useWeatherDashboard();

  if (isError) {
    return <ErrorScreen message="Could not fetch data." onRetry={refetch} />;
  }
  if (isFetching) {
    return <LoadingScreen />;
  }

  return (
    data && (
      <AnimatePresence>
        <RowSpacing>
          <CurrentWeather
            locationName={locationName}
            current={data.current}
            current_units={data.current_units}
          />
        </RowSpacing>

        <Forecast
          daily={data.daily}
          hourly={data.hourly}
          currentTime={data.current.time}
        />
      </AnimatePresence>
    )
  );
};

export default WeatherDashboard;
