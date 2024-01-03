import { Drawer, DrawerProps, IconButtonProps, styled } from "@mui/material";
import { IconButton } from "@components";

export const StyledDrawer = styled(Drawer)<DrawerProps>(
  ({ theme: { palette } }) => ({
    "& .MuiPaper-root": {
      backgroundColor: palette.primary.dark,
    },
  })
);

export const StyledCloseBtn = styled(IconButton)<IconButtonProps>(() => ({
  margin: "20px 20px 20px auto",
}));
