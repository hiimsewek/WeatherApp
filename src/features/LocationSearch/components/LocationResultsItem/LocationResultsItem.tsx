import {
  StyledActionButton,
  StyledListIcon,
  StyledListItem,
  StyledListItemButton,
  StyledListItemText,
} from "./LocationsResultsItem.styled";
import { Clear, History, Search } from "@mui/icons-material";

type LocationsResultsItem = {
  text: string;
  history: boolean;
  onAddToHistory: () => void;
  onRemoveFromHistory: () => void;
};

const LocationResultsItem = ({
  text,
  history,
  onAddToHistory,
  onRemoveFromHistory,
}: LocationsResultsItem) => {
  const actionButton = history && (
    <StyledActionButton icon={Clear} onClick={onRemoveFromHistory} />
  );

  const itemIcon = (
    <StyledListIcon>{history ? <History /> : <Search />}</StyledListIcon>
  );

  return (
    <StyledListItem
      secondaryAction={actionButton}
      disablePadding
      disableGutters
    >
      <StyledListItemButton onClick={onAddToHistory}>
        {itemIcon}
        <StyledListItemText primary={text} />
      </StyledListItemButton>
    </StyledListItem>
  );
};

export default LocationResultsItem;
