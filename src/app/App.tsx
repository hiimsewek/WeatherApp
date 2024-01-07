import { ToastContainer } from "react-toastify";
import { LocationSearch } from "@features/LocationSearch";
import { WeatherPreferences } from "@features/WeatherPreferences";
import { WeatherDashboard } from "@features/WeatherDashboard";
import {
  AppContainer,
  DashboardContainer,
  Header,
  SearchContainer,
} from "./App.styled";

const App = () => {
  return (
    <>
      <AppContainer>
        <Header>
          <SearchContainer>
            <LocationSearch />
          </SearchContainer>
          <WeatherPreferences />
        </Header>
        <DashboardContainer>
          <WeatherDashboard />
        </DashboardContainer>
      </AppContainer>
      <ToastContainer />
    </>
  );
};

export default App;
