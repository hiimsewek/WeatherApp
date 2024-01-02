import { LocationItem } from "../types";

export const filterByPrefix = (arr: LocationItem[], text: string) =>
  arr.filter((item) => item.name.toLowerCase().startsWith(text.toLowerCase()));

export const checkHistoryExistence = (
  historyItem: LocationItem,
  locationItem: LocationItem | number
) => {
  if (typeof locationItem === "number") {
    return historyItem.id === locationItem;
  }
  return (
    locationItem.id === historyItem.id ||
    locationItem.latitude === historyItem.latitude ||
    locationItem.longitude === historyItem.longitude
  );
};

export const findHistoryExistingItemId = (
  historyArray: LocationItem[],
  item: LocationItem | number
) => {
  return historyArray.findIndex((historyItem) =>
    checkHistoryExistence(historyItem, item)
  );
};

export const filterByHistoryAbsence = (
  historyArray: LocationItem[],
  locationsArray: LocationItem[]
) =>
  locationsArray.filter(
    (location) => findHistoryExistingItemId(historyArray, location) === -1
  );

export const combineItemsByValue = (
  value: string,
  historyArray: LocationItem[],
  locationsArray: LocationItem[]
) => {
  const filteredHistoryItems = filterByPrefix(historyArray, value);
  const absentFromHistory = filterByHistoryAbsence(
    historyArray,
    locationsArray
  );

  return filteredHistoryItems.concat(absentFromHistory);
};
