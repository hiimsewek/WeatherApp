import { Icon, IconButtonProps as MuiIconButtonProps } from "@mui/material";
import { StyledIconButton } from "./IconButton.styled";

type IconButtonProps = MuiIconButtonProps & {
  iconName: string;
};

const IconButton = ({ iconName, ...props }: IconButtonProps) => {
  return (
    <StyledIconButton {...props}>
      <Icon>{iconName}</Icon>
    </StyledIconButton>
  );
};

export default IconButton;
