/* eslint-disable no-unused-labels */
import { Button, withStyles } from "@material-ui/core";

const OutlinedButton = withStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    boxShadow: "inset 0px 0px 0px 2px red",
    borderRadius: "2px",
    width: "max-content",
    fontWeight: 500,
    padding: "8px 26px",
    color: "inherit",
    fontSize: "",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
      color: "white",
    },
  },
}))(Button);
export default OutlinedButton;
