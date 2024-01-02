import { List, ListProps, styled } from "@mui/material";

export const StyledList = styled(List)<ListProps>(({ theme: { palette } }) => ({
  backgroundColor: palette.paleblue.main,
  borderRadius: 10,
}));
