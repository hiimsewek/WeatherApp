import { CurrentDetailsItem } from "../CurrentDetailsItem";
import {
  faCloud,
  faCloudRain,
  faCompass,
  faDroplet,
  faGauge,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { DetailsWrapper, RowContainer } from "./CurrentDetails.styled";

type CurrentDetailsProps = {
  cloudCover: string;
  precipitation: string;
  pressure: string;
  humidity: string;
  windDirection: string;
  windSpeed: string;
};

const CurrentDetails = ({
  cloudCover,
  precipitation,
  pressure,
  humidity,
  windDirection,
  windSpeed,
}: CurrentDetailsProps) => {
  return (
    <DetailsWrapper>
      <RowContainer>
        <CurrentDetailsItem
          icon={faDroplet}
          label="Humidity"
          value={humidity}
        />
        <CurrentDetailsItem
          icon={faCloudRain}
          label="Precipitation"
          value={precipitation}
        />
        <CurrentDetailsItem
          icon={faWind}
          label="Wind speed"
          value={windSpeed}
        />
      </RowContainer>
      <RowContainer>
        <CurrentDetailsItem icon={faGauge} label="Pressure" value={pressure} />
        <CurrentDetailsItem
          icon={faCloud}
          label="Cloud cover"
          value={cloudCover}
        />
        <CurrentDetailsItem
          icon={faCompass}
          label="Wind direction"
          value={windDirection}
        />
      </RowContainer>
    </DetailsWrapper>
  );
};

export default CurrentDetails;
