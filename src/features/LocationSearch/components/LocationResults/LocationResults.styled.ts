import { List, ListProps, styled } from "@mui/material";

export const StyledList = styled(List)<ListProps>(({ theme: { palette } }) => ({
  backgroundColor: palette.paleblue.main,
  borderRadius: 10,
  position: "absolute",
  top: "100%",
  left: 0,
  right: 0,
  zIndex: 9999,
}));
