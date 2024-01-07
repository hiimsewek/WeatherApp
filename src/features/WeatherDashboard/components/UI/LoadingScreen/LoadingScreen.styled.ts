import {
  Box,
  BoxProps,
  CircularProgress,
  CircularProgressProps,
  styled,
} from "@mui/material";

export const SpinnerContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export const StyledSpinner = styled(CircularProgress)<CircularProgressProps>(
  ({ theme: { palette } }) => ({
    color: palette.primary.contrastText,
  })
);
