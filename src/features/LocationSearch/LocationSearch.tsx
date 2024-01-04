import { Box, ClickAwayListener } from "@mui/material";
import { MyLocation } from "@mui/icons-material";
import { showToast } from "./utils/toast";
import { Searchbar, LocationResults } from "./components";
import useLocationSearch from "./useLocationSearch";

const SearchLocation = () => {
  const {
    autoFocus,
    changeValueHandler,
    expand,
    expanded,
    focus,
    focused,
    isError,
    resetSearchbar,
    retrieveLocationHandler,
    locations,
    locationSubmitHandler,
    value,
  } = useLocationSearch();

  const displayResults = expanded && focused && locations.length > 0;

  if (isError) {
    showToast("Could not load the location", "error", { toastId: "location1" });
  }

  return (
    <ClickAwayListener onClickAway={resetSearchbar}>
      <Box maxWidth={350}>
        <Searchbar
          placeholder="Search location"
          iconRight={MyLocation}
          value={value}
          onChange={changeValueHandler}
          onIconRightClick={retrieveLocationHandler}
          expand={expanded}
          onExpand={expand}
          autoFocus={autoFocus}
          onFocus={focus}
          onKeyDown={locationSubmitHandler}
        />
        {displayResults && (
          <Box position="relative">
            <LocationResults
              locations={locations}
              onItemPick={resetSearchbar}
            />
          </Box>
        )}
      </Box>
    </ClickAwayListener>
  );
};

export default SearchLocation;
