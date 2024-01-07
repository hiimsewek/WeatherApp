import React from "react";
import { StyledRow } from "./DashboardRow.styled";
import { BoxProps } from "@mui/material";

type DashboardRowProps = BoxProps & {
  children: React.ReactNode;
};

const DashboardRow = ({ children, ...props }: DashboardRowProps) => {
  return <StyledRow {...props}>{children}</StyledRow>;
};

export default DashboardRow;
