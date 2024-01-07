import React from "react";
import { StyledCard } from "./Card.styled";
import { PaperProps } from "@mui/material";

type CardProps = PaperProps & {
  children: React.ReactNode;
};

const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
