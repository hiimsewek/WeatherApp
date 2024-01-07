import { LocationItem } from "@features/LocationSearch/types";
import { StyledList } from "./LocationResults.styled";
import { useAppDispatch, useAppSelector } from "@hooks";
import {
  addToHistory,
  removeFromHistory,
} from "@features/LocationSearch/slices/historySlice";
import { LocationResultsItem } from "../LocationResultsItem";

type LocationResultsProps = {
  locations: LocationItem[];
  onItemPick: () => void;
};

const LocationResults = ({ locations, onItemPick }: LocationResultsProps) => {
  const dispatch = useAppDispatch();

  const historyItems = useAppSelector((state) => state.history.items);

  const addToHistoryHandler = (location: LocationItem) => {
    dispatch(addToHistory(location));
    onItemPick();
  };

  const removeFromHistoryHandler = (id: number) => {
    dispatch(removeFromHistory(id));
  };

  const limitedLocations = locations.slice(0, 10);

  return (
    <StyledList>
      {limitedLocations.map((location: LocationItem) => {
        const administrativeLevel = location.admin1
          ? `${location.admin1}, `
          : "";

        const itemText = `${location.name}, ${administrativeLevel}${location.country_code}`;

        const isInHistory =
          historyItems.findIndex((el) => el.id === location.id) !== -1;

        return (
          <LocationResultsItem
            key={location.id}
            text={itemText}
            history={isInHistory}
            onAddToHistory={addToHistoryHandler.bind(this, location)}
            onRemoveFromHistory={removeFromHistoryHandler.bind(
              this,
              location.id
            )}
          />
        );
      })}
    </StyledList>
  );
};

export default LocationResults;
