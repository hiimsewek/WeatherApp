import { IpLocationData } from "../types";

export const getCurrentLocation = async () => {
  try {
    const res = await fetch("https://freeipapi.com/api/json/");
    const data = await res.json();
    return { ...data } as IpLocationData;
  } catch (e) {
    console.error("Could not fetch location data");
  }
};
