import { Box } from "@mui/material";
import {
  DailyItem,
  DailyWrapper,
  DayContainer,
  StyledImage,
  TempContainer,
} from "./ForecastDaily.styled";

type ForecastDailyProps = {
  daily: {
    image: string;
    day: string;
    temperature: string;
    isSelected: boolean;
  }[];
  onSelect: React.Dispatch<React.SetStateAction<number>>;
};

const ForecastDaily = ({ daily, onSelect }: ForecastDailyProps) => {
  return (
    daily && (
      <DailyWrapper>
        {daily.map((el, i) => (
          <DailyItem
            key={i}
            active={+el.isSelected}
            onClick={onSelect.bind(this, i)}
          >
            <TempContainer>
              <StyledImage component="img" src={el.image} />
              <Box>{el.temperature}</Box>
            </TempContainer>
            <DayContainer>{el.day}</DayContainer>
          </DailyItem>
        ))}
      </DailyWrapper>
    )
  );
};

export default ForecastDaily;
