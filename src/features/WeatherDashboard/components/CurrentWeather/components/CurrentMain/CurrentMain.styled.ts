import { Card } from "@features/WeatherDashboard/components/UI";
import {
  Box,
  BoxProps,
  Typography,
  TypographyProps,
  styled,
  CardMedia,
  CardMediaProps,
  PaperProps,
} from "@mui/material";

export const MainWrapper = styled(Card)<PaperProps>(
  ({ theme: { palette, breakpoints } }) => ({
    backgroundColor: "transparent",
    boxShadow: "none",

    [breakpoints.up("lg")]: {
      backgroundColor: palette.primary.light,
      width: "350px",
      padding: "40px",
    },
  })
);

export const RowContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  alignItems: "center",
}));

export const ColumnContainer = styled(Box)<BoxProps>(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const StyledName = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints } }) => ({
    paddingRight: "8px",
    "&": {
      fontSize: "1rem",
    },

    [breakpoints.up("lg")]: {
      "&": {
        fontSize: "1.2rem",
      },
    },
  })
);

export const StyledImage = styled(CardMedia)<CardMediaProps>(() => ({
  height: "90px",
  width: "90px",
}));

export const StyledTemperature = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints } }) => ({
    "&": {
      height: "90px",
      lineHeight: "90px",
      fontSize: "3rem",
    },

    [breakpoints.up("lg")]: {
      "&": {
        fontSize: "3.2rem",
      },
    },
  })
);

export const StyledExtraInfo = styled(Typography)<TypographyProps>(
  ({ theme: { breakpoints } }) => ({
    "&": {
      fontSize: "0.8rem",
    },

    [breakpoints.up("lg")]: {
      "&": {
        fontSize: "1rem",
      },
    },
  })
);
