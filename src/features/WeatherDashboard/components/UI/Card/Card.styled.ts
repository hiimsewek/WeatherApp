import { Paper, PaperProps, styled } from "@mui/material";

export const StyledCard = styled(Paper)<PaperProps>(
  ({ theme: { breakpoints } }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "20px",
    maxWidth: "700px",
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    borderRadius: "10px",

    [breakpoints.up("lg")]: {
      boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
  })
);
