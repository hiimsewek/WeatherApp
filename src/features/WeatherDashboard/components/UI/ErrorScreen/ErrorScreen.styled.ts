import { Box, BoxProps, Button, ButtonProps, styled } from "@mui/material";

export const ErrorContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

export const RetryButton = styled(Button)<ButtonProps>(
  ({ theme: { palette } }) => ({
    color: palette.text.primary,
    textTransform: "none",
    textDecoration: "underline",
    padding: "0 8px",
    fontSize: "1rem",
  })
);
