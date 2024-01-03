import { Button, ButtonProps, styled } from "@mui/material";
import { COLORS } from "@styles";

export const StyledButton = styled(Button)<ButtonProps & { active: number }>(
  ({ theme: { palette }, active }) => ({
    backgroundColor: active ? palette.primary.light : palette.grey[900],
    color: active ? palette.text.primary : palette.text.disabled,
    borderWidth: 1,
    borderColor: active
      ? `${COLORS.blue300} !important`
      : `${palette.text.disabled} !important`,
    borderStyle: "solid",
    width: "100%",
    maxWidth: 150,
    padding: "5px 30px",
    textTransform: "none",

    "&:hover": {
      backgroundColor: active ? palette.primary.light : palette.grey[900],
      borderColor: active
        ? `${COLORS.blue300} !important`
        : `${palette.text.disabled} !important`,
      opacity: 0.8,
      transition: "opacity .3s linear",
    },
  })
);
