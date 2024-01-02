import { styled } from "@mui/material";
import { Input, type InputProps } from "@components";

export const StyledSearchbar = styled(Input)<InputProps & { expand: number }>(
  ({ expand }) => ({
    width: expand ? "100%" : 0,
    opacity: expand ? 1 : 0,
    overflow: "hidden",
    transition: "width .2s linear",
    cursor: expand ? "auto" : "context-menu",
    animation: "none",
  })
);
