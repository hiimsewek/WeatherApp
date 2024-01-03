import {
  Box,
  BoxProps,
  ButtonGroup,
  ButtonGroupProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

export const StyledGroupContainer = styled(Box)<BoxProps>(() => ({
  padding: "40px 20px",
}));

export const StyledGroup = styled(ButtonGroup)<ButtonGroupProps>(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledLabel = styled(Typography)<TypographyProps>(
  ({ theme: { palette } }) => ({
    color: palette.primary.contrastText,
    textTransform: "uppercase",
    fontSize: "0.7rem",
    fontWeight: "bold",
    letterSpacing: 1,
    paddingBottom: 10,
  })
);
