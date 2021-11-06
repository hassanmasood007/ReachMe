/* eslint-disable no-unused-labels */
import { Button, withStyles } from "@material-ui/core";

const SecondaryButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "2px",
    width: "max-content",
    fontWeight: 500,
    padding: "8px 26px",
    color: "white",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
}))(Button);
export default SecondaryButton;
