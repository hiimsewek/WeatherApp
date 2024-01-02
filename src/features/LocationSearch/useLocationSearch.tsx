import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useAppDispatch, useAppSelector, useDebounce } from "@hooks";
import {
  useGetLocationQuery,
  useLazyGetLocationQuery,
} from "./apis/geocodingApi";
import { addToHistory } from "./slices/historySlice";
import { getCurrentLocation } from "./apis/ipApi";
import { customAlphabet } from "nanoid";
import { combineItemsByValue } from "./utils/historyFilters";

const useLocationSearch = () => {
  const [value, setValue] = useState("");
  const changeValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("lg"));

  const [expanded, setExpanded] = useState(!isSmallDevice);
  const [focused, setFocused] = useState(false);

  const expand = () => {
    setExpanded(true);
  };

  const focus = () => {
    setFocused(true);
  };

  const resetSearchbar = () => {
    if (isSmallDevice) {
      setExpanded(false);
    }
    setFocused(false);
    setValue("");
  };

  const debouncedValue = useDebounce<string>(value, 300);
  const { data: locationsData, isError: isSearchLocationsError } =
    useGetLocationQuery(debouncedValue);

  const historyItems = useAppSelector((state) => state.history.items);
  const locations = locationsData?.results || [];
  const combinedLocations = combineItemsByValue(value, historyItems, locations);

  const [trigger, { isError: isSubmitLocationError }] =
    useLazyGetLocationQuery();

  const dispatch = useAppDispatch();
  const locationSubmitHandler = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && value) {
      const { results } = await trigger(value, false).unwrap();
      if (results.length > 0) {
        dispatch(addToHistory(results[0]));
        resetSearchbar();
        setValue("");
      }
    }
  };

  const retrieveLocationHandler = async () => {
    const data = await getCurrentLocation();

    if (data) {
      const nanoid = customAlphabet("1234567890", 18);

      const item = {
        id: +nanoid(),
        name: data.cityName,
        admin1: data.regionName,
        latitude: data.latitude,
        longitude: data.longitude,
        country_code: data.countryCode,
      };

      dispatch(addToHistory(item));
    }
    resetSearchbar();
  };

  return {
    expanded,
    focused,
    focus,
    retrieveLocationHandler,
    expand,
    resetSearchbar,
    changeValueHandler,
    locations: combinedLocations,
    locationSubmitHandler,
    isError: isSearchLocationsError || isSubmitLocationError,
    value,
  };
};

export default useLocationSearch;
