import { IconButton, IconButtonProps, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)<IconButtonProps>(
  ({ theme: { palette } }) => ({
    color: palette.text.primary,
  })
);
