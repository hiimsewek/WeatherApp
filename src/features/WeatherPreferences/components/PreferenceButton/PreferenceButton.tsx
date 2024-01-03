import { ButtonProps } from "@mui/material";
import { StyledButton } from "./PreferenceButton.styled";

type PreferenceButtonProps = ButtonProps & {
  active: boolean;
  children: string;
};

const PreferenceButton = ({
  active,
  children,
  ...props
}: PreferenceButtonProps) => {
  return (
    <StyledButton {...props} active={+active}>
      {children}
    </StyledButton>
  );
};

export default PreferenceButton;
