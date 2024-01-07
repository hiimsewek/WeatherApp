import {
  Box,
  BoxProps,
  Typography,
  TypographyProps,
  styled,
} from "@mui/material";

export const DetailsContainer = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [breakpoints.up("lg")]: {
      "&": {
        flexDirection: "row",
      },
    },
  })
);

export const IconContainer = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "8px",
    width: "40px",
    "& .svg-inline--fa": {
      fontSize: "1.4rem",
    },

    [breakpoints.up("lg")]: {
      paddingBottom: 0,
      "& .svg-inline--fa": {
        fontSize: "1.6rem",
      },
    },
  })
);

export const TextContainer = styled(Box)<BoxProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "90px",

    [breakpoints.up("lg")]: {
      "&": {
        width: "120px",
      },
    },
  })
);

export const StyledText = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints } }) => ({
    fontSize: "0.7rem",
    fontWeight: 400,

    [breakpoints.up("lg")]: {
      "&": {
        fontSize: "0.9rem",
      },
    },
  })
);
