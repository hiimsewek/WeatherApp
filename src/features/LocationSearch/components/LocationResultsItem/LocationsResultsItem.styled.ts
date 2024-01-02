import {
  IconButtonProps,
  ListItem,
  ListItemButton,
  ListItemButtonProps,
  ListItemIcon,
  ListItemIconProps,
  ListItemProps,
  ListItemText,
  ListItemTextProps,
  styled,
} from "@mui/material";
import { IconButton } from "@components";

export const StyledListItem = styled(ListItem)<ListItemProps>(() => ({
  "& .MuiListItem-padding": {
    padding: "0 !important",
  },
}));

export const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
  () => ({
    paddingLeft: 8,
    paddingRight: 8,
  })
);

export const StyledActionButton = styled(IconButton)<IconButtonProps>(
  ({ theme: { palette } }) => ({
    color: palette.paleblue.contrastText,
  })
);

export const StyledListIcon = styled(ListItemIcon)<ListItemIconProps>(
  ({ theme: { palette } }) => ({
    color: palette.paleblue.contrastText,
    minWidth: 24,
  })
);

export const StyledListItemText = styled(ListItemText)<ListItemTextProps>(
  ({ theme: { palette } }) => ({
    "& .MuiTypography-root": {
      color: palette.paleblue.contrastText,
      paddingLeft: 8,
    },
  })
);
