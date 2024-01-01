import { IconButtonProps, Input, InputProps, styled } from "@mui/material";
import { IconButton } from "../IconButton";

export const StyledInput = styled(Input)<InputProps>(
  ({ theme: { palette } }) => ({
    backgroundColor: palette.paleblue.main,
    color: palette.paleblue.contrastText,
    width: "100%",
    height: 40,
    padding: 8,
    borderRadius: 20,
    ".MuiInput-input::placeholder": {
      color: palette.paleblue.contrastText,
      opacity: 0.6,
    },
    ".MuiInputBase-input": {
      padding: "0 8px",
    },
  })
);

export const StyledIconBtn = styled(IconButton)<IconButtonProps>(
  ({ theme: { palette } }) => ({
    color: palette.paleblue.contrastText,
    padding: 0,

    "&:hover": {
      backgroundColor: "transparent",
      opacity: 0.7,
      transition: "opacity .3s linear",
    },
  })
);
