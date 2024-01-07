import { Icon } from "@mui/material";
import { Place } from "@mui/icons-material";
import {
  ColumnContainer,
  MainWrapper,
  RowContainer,
  StyledExtraInfo,
  StyledImage,
  StyledName,
  StyledTemperature,
} from "./CurrentMain.styled";
import { IconData } from "@features/WeatherDashboard/types";

type CurrentMainProps = {
  locationName: string;
  temperature: string;
  apparent_temperature: string;
  iconData: IconData;
};

const CurrentMain = ({
  locationName,
  temperature,
  apparent_temperature,
  iconData,
}: CurrentMainProps) => {
  return (
    <MainWrapper>
      <RowContainer>
        <StyledName component="span">{locationName}</StyledName>
        <Icon component={Place} />
      </RowContainer>
      <RowContainer>
        <ColumnContainer paddingRight="20px">
          <StyledTemperature component="span">{temperature}</StyledTemperature>

          <StyledExtraInfo component="span">
            Feels like {apparent_temperature}
          </StyledExtraInfo>
        </ColumnContainer>
        <ColumnContainer>
          <StyledImage component="img" src={iconData.image} />
          <StyledExtraInfo component="span">
            {iconData.description}
          </StyledExtraInfo>
        </ColumnContainer>
      </RowContainer>
    </MainWrapper>
  );
};

export default CurrentMain;
