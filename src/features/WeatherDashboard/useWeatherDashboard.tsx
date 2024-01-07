import { useEffect, useState } from "react";
import { useAppSelector } from "@hooks";
import { getCurrentLocation } from "@features/LocationSearch/";
import { useGetForecastQuery } from "./apis/weatherApi";
import { Coords } from "./types";

type SearchedItem = Coords & {
  name: string;
};

const useWeatherDashboard = () => {
  const [searchedItem, setSearchedItem] = useState<SearchedItem | null>(null);

  const latestSearch = useAppSelector((state) => state.history.items);
  const isLatestSearchEmpty = latestSearch.length === 0;

  useEffect(() => {
    let ignore = false;

    const getSearchedItemData = async () => {
      if (!isLatestSearchEmpty) {
        setSearchedItem({
          name: latestSearch[0].name,
          latitude: latestSearch[0].latitude,
          longitude: latestSearch[0].longitude,
        });
        return;
      }
      const data = await getCurrentLocation();
      if (data && !ignore) {
        setSearchedItem({
          name: data.cityName,
          latitude: data.latitude,
          longitude: data.longitude,
        });
      }
    };

    getSearchedItemData();

    return () => {
      ignore = true;
    };
  }, [latestSearch, isLatestSearchEmpty]);

  const { data, isError, isFetching, refetch } = useGetForecastQuery(
    {
      latitude: searchedItem?.latitude as number,
      longitude: searchedItem?.longitude as number,
    },
    {
      skip: !searchedItem,
    }
  );

  return {
    locationName: searchedItem?.name || "",
    data,
    isFetching,
    isError,
    refetch,
  };
};

export default useWeatherDashboard;
