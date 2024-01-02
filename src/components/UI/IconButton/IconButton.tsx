import { Icon, IconButtonProps as MuiIconButtonProps } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import { StyledIconButton } from "./IconButton.styled";

type IconButtonProps = MuiIconButtonProps & {
  icon: SvgIconComponent;
};

const IconButton = ({ icon, ...props }: IconButtonProps) => {
  return (
    <StyledIconButton {...props}>
      <Icon component={icon} />
    </StyledIconButton>
  );
};

export default IconButton;
