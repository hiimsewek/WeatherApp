import { InputProps } from "./Input.types";
import { StyledIconBtn, StyledInput } from "./Input.styled";

const Input = ({ iconRight, onIconRightClick, ...props }: InputProps) => {
  const iconRightBtn = iconRight && (
    <StyledIconBtn iconName={iconRight} onClick={onIconRightClick} />
  );

  return (
    <StyledInput
      disableUnderline={true}
      endAdornment={iconRightBtn}
      {...props}
    />
  );
};

export default Input;
