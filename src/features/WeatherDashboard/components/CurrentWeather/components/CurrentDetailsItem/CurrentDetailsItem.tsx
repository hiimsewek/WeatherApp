import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  DetailsContainer,
  IconContainer,
  StyledText,
  TextContainer,
} from "./CurrentDetailsItem.styled";

type CurrentDetailsItemProps = {
  icon: IconDefinition;
  label: string;
  value: string;
};

const CurrentDetailsItem = ({
  icon,
  label,
  value,
}: CurrentDetailsItemProps) => {
  return (
    <DetailsContainer>
      <IconContainer>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      <TextContainer>
        <StyledText component="span">{label}</StyledText>
        <StyledText component="span">{value}</StyledText>
      </TextContainer>
    </DetailsContainer>
  );
};

export default CurrentDetailsItem;
