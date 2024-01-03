import { Box, Grid } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { LocationSearch } from "@features/LocationSearch";
import { WeatherPreferences } from "@features/WeatherPreferences";

const App = () => {
  return (
    <>
      <Grid container padding="20px" flexWrap="nowrap">
        <Grid item flexGrow={1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                xs: "flex-end",
                lg: "center",
              },
              "& .MuiBox-root": {
                width: "100%",
              },
            }}
          >
            <LocationSearch />
          </Box>
        </Grid>

        <Grid item>
          <WeatherPreferences />
        </Grid>
      </Grid>
      <ToastContainer />
    </>
  );
};

export default App;
