import { styled } from "@mui/material";
import { Input, type InputProps } from "@components";

export const StyledSearchbar = styled(Input)<InputProps & { expand: number }>(
  ({ expand }) => ({
    display: expand ? "flex" : "none",
    opacity: expand ? 1 : 0,
    overflow: "hidden",
    cursor: expand ? "auto" : "context-menu",
    animation: "none",
  })
);
