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
              justifyContent: "center",
              position: "relative",
              "& .MuiBox-root": {
                width: "100%",
              },
              "& .css-143rofo-MuiButtonBase-root-MuiIconButton-root": {
                position: "absolute",
                top: 0,
                right: 0,
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
