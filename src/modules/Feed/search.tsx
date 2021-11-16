import { TextField } from "@material-ui/core";
import { FunctionComponent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  resize: {
    fontSize: 20,
  },
});
const Search: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box className="text-center mt-3 mb-4">
      <TextField
        InputProps={{
          classes: {
            input: classes.resize,
          },
        }}
        size="small"
        placeholder="search"
        id="search"
      />
      <SearchIcon />
    </Box>
  );
};

export default Search;
