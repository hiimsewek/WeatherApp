import { InputProps as MuiInputProps } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

export type InputProps = Omit<MuiInputProps, "endAdornment"> & {
  iconRight?: SvgIconComponent;
  onIconRightClick?: () => void;
};
