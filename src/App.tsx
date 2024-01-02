import { Box } from "@mui/material";
import { LocationSearch } from "@features/LocationSearch";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Box>
        <LocationSearch />
      </Box>
      <ToastContainer />
    </>
  );
};

export default App;
