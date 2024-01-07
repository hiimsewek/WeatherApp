import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useAppSelector } from "@hooks";
import { ForecastData } from "@features/WeatherDashboard/types";
import {
  formatDate,
  isSameOrAfter,
  transformForecastDays,
} from "@features/WeatherDashboard/utils/time";
import { getIconData } from "@features/WeatherDashboard/utils/weatherIconPicker";
import { round } from "@features/WeatherDashboard/utils/math";
import { mergeTempValueWithUnit } from "@features/WeatherDashboard/utils/merge";
import { celsiusToFahrenheit } from "@features/WeatherDashboard/utils/convert";

type UseForecastParams = {
  daily: ForecastData["daily"];
  hourly: ForecastData["hourly"];
  currentTime: string;
};

const useForecast = ({ daily, hourly, currentTime }: UseForecastParams) => {
  const [selectedDay, setSelectedDay] = useState(0);
  const { temperature } = useAppSelector((state) => state.preferences.units);

  const { breakpoints } = useTheme();
  const matchesMobile = useMediaQuery(breakpoints.down("lg"));
  const mobileFormat = matchesMobile ? "ddd" : "ddd, D MMM";

  const weekdays = transformForecastDays(daily.time, mobileFormat);

  const preparedDaily = daily.temperature_2m_max.map((el, i) => {
    const icon = getIconData(daily.weather_code[i], 1);
    const avgTemp = round((el + daily.temperature_2m_min[i]) / 2);
    const isSelected = selectedDay === i;

    return {
      image: icon.image,
      day: weekdays[i],
      temperature: mergeTempValueWithUnit(avgTemp, temperature),
      isSelected,
    };
  });

  const hourlyFloor = hourly.time.findIndex((el) => {
    if (selectedDay === 0) {
      return isSameOrAfter(el, currentTime);
    }
    return isSameOrAfter(el, daily.time[selectedDay]);
  });

  const preparedHourly = hourly.time
    .slice(hourlyFloor, hourlyFloor + 24)
    .map((_, i) => {
      const hourlyIndex = hourlyFloor + i;

      const val =
        temperature === "Celsius"
          ? round(hourly.temperature_2m[hourlyIndex])
          : round(celsiusToFahrenheit(hourly.temperature_2m[hourlyIndex]));

      return {
        time: formatDate(hourly.time[hourlyIndex], "HH:mm"),
        temperature: val,
      };
    });

  return { selectedDay, setSelectedDay, preparedDaily, preparedHourly };
};

export default useForecast;
