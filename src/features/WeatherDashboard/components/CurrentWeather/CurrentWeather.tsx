import { ForecastData } from "@features/WeatherDashboard/types";
import { DashboardRow } from "@features/WeatherDashboard/components/UI";
import { CurrentMain } from "./components/CurrentMain";
import { CurrentDetails } from "./components/CurrentDetails";
import useCurrentWeather from "./useCurrentWeather";

type CurrentWeatherProps = {
  current: ForecastData["current"];
  current_units: ForecastData["current_units"];
  locationName: string;
};

const CurrentWeather = ({
  current,
  current_units,
  locationName,
}: CurrentWeatherProps) => {
  const {
    apparentTemperatureText,
    cloudCoverText,
    directionText,
    humidityText,
    iconData,
    precipitationText,
    pressureText,
    temperatureText,
    windSpeedText,
  } = useCurrentWeather({ current, current_units });

  return (
    <DashboardRow>
      <CurrentMain
        locationName={locationName}
        apparent_temperature={apparentTemperatureText}
        temperature={temperatureText}
        iconData={iconData}
      />

      <CurrentDetails
        cloudCover={cloudCoverText}
        precipitation={precipitationText}
        pressure={pressureText}
        humidity={humidityText}
        windDirection={directionText}
        windSpeed={windSpeedText}
      />
    </DashboardRow>
  );
};

export default CurrentWeather;
