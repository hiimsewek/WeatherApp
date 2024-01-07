import descriptionsJSON from "@data/descriptions.json";
import { IconData } from "../types";

type Descriptions = {
  [index: number]: {
    [daytime: string]: IconData;
  };
};

const descriptions = descriptionsJSON as Descriptions;

export const getIconData = (weather_code: number, is_day: number): IconData => {
  const daytime = is_day ? "day" : "night";

  return descriptions[weather_code][daytime];
};
