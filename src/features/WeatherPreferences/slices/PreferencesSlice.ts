import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type PreferencesInitialState = {
  units: {
    temperature: "Celsius" | "Fahrenheit";
    length: "millimeters" | "inches";
    speed: "kmh" | "mph";
  };
};

const initialPreferences: PreferencesInitialState = {
  units: {
    temperature: "Celsius",
    length: "millimeters",
    speed: "kmh",
  },
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState: initialPreferences,
  reducers: {
    setTemperaturePreference: (
      state,
      action: PayloadAction<PreferencesInitialState["units"]["temperature"]>
    ) => {
      state.units.temperature = action.payload;
    },
    setLengthPreference: (
      state,
      action: PayloadAction<PreferencesInitialState["units"]["length"]>
    ) => {
      state.units.length = action.payload;
    },
    setSpeedPreference: (
      state,
      action: PayloadAction<PreferencesInitialState["units"]["speed"]>
    ) => {
      state.units.speed = action.payload;
    },
  },
});

export const {
  setLengthPreference,
  setSpeedPreference,
  setTemperaturePreference,
} = preferencesSlice.actions;

export default preferencesSlice.reducer;
