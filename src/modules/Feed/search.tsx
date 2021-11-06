import { TextField } from "@material-ui/core";
import { FunctionComponent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";

const Search: FunctionComponent = () => {
  return (
    <Box className="text-center mb-4">
      <TextField placeholder="search" id="search" />
      <SearchIcon />
    </Box>
  );
};

export default Search;
