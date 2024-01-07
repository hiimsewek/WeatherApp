export type Coords = {
  latitude: number;
  longitude: number;
};

export type IconData = { description: "string"; image: string };

export type ForecastData = keyof Coords & {
  elevation: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbrevation: string;
  current: {
    apparent_temperature: number;
    cloud_cover: number;
    interval: number;
    is_day: number;
    precipitation: number;
    pressure_msl: number;
    relative_humidity_2m: number;
    temperature_2m: number;
    time: string;
    weather_code: number;
    wind_direction_10m: number;
    wind_speed_10m: number;
  };
  current_units: {
    apparent_temperature: string;
    cloud_cover: string;
    interval: string;
    is_day: string;
    precipitation: string;
    pressure_msl: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    time: string;
    weather_code: string;
    wind_direction_10m: string;
    wind_speed_10m: string;
  };
  daily: {
    temperature_2m_min: number[];
    temperature_2m_max: number[];
    time: string[];
    weather_code: number[];
  };
  daily_units: {
    temperature_2m_min: string;
    temperature_2m_max: string;
    time: string;
    weather_code: string;
  };
  hourly: {
    temperature_2m: number[];
    time: string[];
  };
  hourly_units: {
    temperature_2m: string;
    time: string;
  };
};
