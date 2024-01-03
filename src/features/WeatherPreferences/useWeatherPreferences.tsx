import { useState } from "react";
import { useAppSelector, useAppDispatch } from "@hooks";
import {
  setLengthPreference,
  setSpeedPreference,
  setTemperaturePreference,
} from "./slices/PreferencesSlice";

const useWeatherPreferences = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpened(!drawerOpened);
  };

  const { units } = useAppSelector((state) => state.preferences);

  const checkActive = (key: keyof typeof units, value: string) => {
    return units[key] === value;
  };

  const dispatch = useAppDispatch();

  const tempPreferenceHandler = (value: (typeof units)["temperature"]) => {
    if (units["temperature"] === value) return;

    dispatch(setTemperaturePreference(value));
  };

  const lengthPreferenceHandler = (value: (typeof units)["length"]) => {
    if (units["length"] === value) return;

    dispatch(setLengthPreference(value));
  };

  const speedPreferenceHandler = (value: (typeof units)["speed"]) => {
    if (units["speed"] === value) return;

    dispatch(setSpeedPreference(value));
  };

  return {
    drawerOpened,
    toggleDrawer,
    checkActive,
    tempPreferenceHandler,
    lengthPreferenceHandler,
    speedPreferenceHandler,
  };
};

export default useWeatherPreferences;
