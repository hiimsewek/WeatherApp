import { Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { LocationSearch } from "@features/LocationSearch";
import { WeatherPreferences } from "@features/WeatherPreferences";
import {
  AppContainer,
  LocationSearchInnerContainer,
  LocationSearchOuterContainer,
  Wrapper,
} from "./App.styled";

const App = () => {
  return (
    <>
      <AppContainer container>
        <Wrapper container>
          <LocationSearchOuterContainer item>
            <LocationSearchInnerContainer>
              <LocationSearch />
            </LocationSearchInnerContainer>
          </LocationSearchOuterContainer>
          <Grid item>
            <WeatherPreferences />
          </Grid>
        </Wrapper>
      </AppContainer>
      <ToastContainer />
    </>
  );
};

export default App;
