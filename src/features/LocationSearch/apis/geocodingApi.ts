import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LocationData } from "../types";

const geocodingApi = createApi({
  reducerPath: "geocodingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://geocoding-api.open-meteo.com/v1/search",
  }),
  endpoints: (builder) => ({
    getLocation: builder.query<{ results: LocationData[] }, string>({
      query: (name: string) => `?name=${name}`,
    }),
  }),
});

export const { useGetLocationQuery, useLazyGetLocationQuery } = geocodingApi;

export default geocodingApi;
