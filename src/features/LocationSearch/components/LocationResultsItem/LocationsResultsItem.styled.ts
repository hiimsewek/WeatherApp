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
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.paleblue.contrastText,

    "& .MuiSvgIcon-root": {
      fontSize: "1.4rem",
      [breakpoints.up("lg")]: {
        fontSize: "1.5rem",
      },
    },
  })
);

export const StyledListIcon = styled(ListItemIcon)<ListItemIconProps>(
  ({ theme: { palette, breakpoints } }) => ({
    color: palette.paleblue.contrastText,
    minWidth: 24,

    "& .MuiSvgIcon-root": {
      fontSize: "1.4rem",

      [breakpoints.up("lg")]: {
        fontSize: "1.5rem",
      },
    },
  })
);

export const StyledListItemText = styled(ListItemText)<ListItemTextProps>(
  ({ theme: { palette, breakpoints } }) => ({
    "& .MuiTypography-root": {
      color: palette.paleblue.contrastText,
      paddingLeft: 8,
      fontSize: "0.9rem",

      [breakpoints.up("lg")]: {
        fontSize: "1rem",
      },
    },
  })
);
