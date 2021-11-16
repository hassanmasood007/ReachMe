/* eslint-disable no-unused-labels */
import { TextField, withStyles } from "@material-ui/core";
// eslint-disable-next-line
const Input = withStyles((theme) => ({
  root: {
    background: "inherit",
    "& label.Mui-focused": {
      color: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
    },
  },
}))(TextField);

export default Input;
