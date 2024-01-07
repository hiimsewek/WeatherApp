import { RootState } from "@store";
import { celsiusToFahrenheit, kmhToMph, mmsToInches } from "./convert";
import { round } from "@features/WeatherDashboard/utils/math";

export const mergeTempValueWithUnit = (
  value: number,
  preference: RootState["preferences"]["units"]["temperature"]
) => {
  const unit = preference === "Celsius" ? "\u00B0C" : "\u00B0F";

  const tempValue =
    unit === "°C" ? round(value) : round(celsiusToFahrenheit(value));

  return `${tempValue}${unit}`;
};

export const mergeLengthValueWithUnit = (
  value: number,
  preference: RootState["preferences"]["units"]["length"]
) => {
  const unit = preference === "millimeters" ? "mm" : "in";

  const lengthValue = unit === "mm" ? round(value) : round(mmsToInches(value));

  return `${lengthValue} ${unit}`;
};

export const mergeSpeedValueWithUnit = (
  value: number,
  preference: RootState["preferences"]["units"]["speed"]
) => {
  const unit = preference === "kmh" ? "km/h" : "mph";

  const speedValue = unit === "km/h" ? round(value) : round(kmhToMph(value));

  return `${speedValue} ${unit}`;
};
