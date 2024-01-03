import React from "react";
import {
  StyledGroup,
  StyledGroupContainer,
  StyledLabel,
} from "./PrerefenceGroup.styled";
import { BoxProps, ButtonGroupProps, TypographyProps } from "@mui/material";

type PreferenceGroupProps = {
  label: string;
  children: React.ReactNode;
  buttonGroupProps?: ButtonGroupProps;
  labelProps?: TypographyProps;
  containerProps?: BoxProps;
};

const PreferenceGroup = ({
  label,
  children,
  buttonGroupProps,
  containerProps,
  labelProps,
}: PreferenceGroupProps) => {
  return (
    <StyledGroupContainer {...containerProps}>
      <StyledLabel component="div" variant="body2" {...labelProps}>
        {label}
      </StyledLabel>
      <StyledGroup variant="contained" {...buttonGroupProps}>
        {children}
      </StyledGroup>
    </StyledGroupContainer>
  );
};

export default PreferenceGroup;
