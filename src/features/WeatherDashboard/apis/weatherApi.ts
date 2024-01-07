import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coords, ForecastData } from "../types";

const currentWeatherOptions = `temperature_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,pressure_msl,wind_speed_10m,wind_direction_10m,relative_humidity_2m`;
const dailyForecastOptions = `weather_code,temperature_2m_max,temperature_2m_min`;
const hourlyForecastOptions = `temperature_2m,relative_humidity_2m,precipitation_probability`;

const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.open-meteo.com/v1/forecast",
  }),
  endpoints: (builder) => ({
    getForecast: builder.query<ForecastData, Coords>({
      query: (coords: Coords) =>
        `?latitude=${coords.latitude}&longitude=${coords.longitude}&current=${currentWeatherOptions}&daily=${dailyForecastOptions}&hourly=${hourlyForecastOptions}&timezone=auto`,
    }),
  }),
});

export const { useGetForecastQuery } = weatherApi;
export default weatherApi;
