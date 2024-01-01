import { InputProps as MuiInputProps } from "@mui/material";

export type InputProps = Omit<MuiInputProps, "endAdornment"> & {
  iconRight?: string;
  onIconRightClick?: () => void;
};
