import React from "react";
import { BoxProps } from "@mui/material";
import { StyledSpacing } from "./RowSpacing.styled";

type RowSpacingProps = BoxProps & {
  children: React.ReactNode;
};

const RowSpacing = ({ children, ...props }: RowSpacingProps) => {
  return <StyledSpacing {...props}>{children}</StyledSpacing>;
};

export default RowSpacing;
