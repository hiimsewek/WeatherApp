import { Settings } from "@mui/icons-material";
import { IconButton } from "@components";
import { Drawer, PreferenceGroup, PreferenceButton } from "./components";
import useWeatherPreferences from "./useWeatherPreferences";

const WeatherPreferences = () => {
  const {
    checkActive,
    drawerOpened,
    lengthPreferenceHandler,
    speedPreferenceHandler,
    tempPreferenceHandler,
    toggleDrawer,
  } = useWeatherPreferences();

  return (
    <>
      <IconButton icon={Settings} onClick={toggleDrawer} />
      <Drawer open={drawerOpened} onClose={toggleDrawer}>
        <PreferenceGroup label="temperature">
          <PreferenceButton
            active={checkActive("temperature", "Celsius")}
            onClick={tempPreferenceHandler.bind(this, "Celsius")}
          >
            Celsius
          </PreferenceButton>
          <PreferenceButton
            active={checkActive("temperature", "Fahrenheit")}
            onClick={tempPreferenceHandler.bind(this, "Fahrenheit")}
          >
            Fahrenheit
          </PreferenceButton>
        </PreferenceGroup>

        <PreferenceGroup label="length">
          <PreferenceButton
            active={checkActive("length", "millimeters")}
            onClick={lengthPreferenceHandler.bind(this, "millimeters")}
          >
            millimeters
          </PreferenceButton>
          <PreferenceButton
            active={checkActive("length", "inches")}
            onClick={lengthPreferenceHandler.bind(this, "inches")}
          >
            inches
          </PreferenceButton>
        </PreferenceGroup>

        <PreferenceGroup label="speed">
          <PreferenceButton
            active={checkActive("speed", "kmh")}
            onClick={speedPreferenceHandler.bind(this, "kmh")}
          >
            km/h
          </PreferenceButton>
          <PreferenceButton
            active={checkActive("speed", "mph")}
            onClick={speedPreferenceHandler.bind(this, "mph")}
          >
            mph
          </PreferenceButton>
        </PreferenceGroup>
      </Drawer>
    </>
  );
};

export default WeatherPreferences;
