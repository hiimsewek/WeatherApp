import {
  mergeLengthValueWithUnit,
  mergeSpeedValueWithUnit,
  mergeTempValueWithUnit,
} from "@features/WeatherDashboard/utils/merge";
import { useAppSelector } from "@hooks";
import { degToDirection } from "@features/WeatherDashboard/utils/convert";
import { getIconData } from "@features/WeatherDashboard/utils/weatherIconPicker";
import { ForecastData } from "@features/WeatherDashboard/types";
import { round } from "@features/WeatherDashboard/utils/math";

type UseCurrentWeatherParams = {
  current: ForecastData["current"];
  current_units: ForecastData["current_units"];
};

const useCurrentWeather = ({
  current,
  current_units,
}: UseCurrentWeatherParams) => {
  const { speed, temperature, length } = useAppSelector(
    (state) => state.preferences.units
  );

  const temperatureText = mergeTempValueWithUnit(
    current.temperature_2m,
    temperature
  );
  const apparentTemperatureText = mergeTempValueWithUnit(
    current.apparent_temperature,
    temperature
  );
  const precipitationText = mergeLengthValueWithUnit(
    current.precipitation,
    length
  );
  const windSpeedText = mergeSpeedValueWithUnit(current.wind_speed_10m, speed);

  const directionText = degToDirection(~~current.wind_direction_10m);
  const cloudCoverText = `${round(current.cloud_cover)}${
    current_units.cloud_cover
  }`;
  const pressureText = `${round(current.pressure_msl)} ${
    current_units.pressure_msl
  }`;
  const humidityText = `${round(current.relative_humidity_2m)}${
    current_units.relative_humidity_2m
  }`;

  const iconData = getIconData(current.weather_code, current.is_day);

  return {
    temperatureText,
    apparentTemperatureText,
    precipitationText,
    windSpeedText,
    directionText,
    pressureText,
    cloudCoverText,
    humidityText,
    iconData,
  };
};

export default useCurrentWeather;
