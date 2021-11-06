/* eslint-disable no-unused-labels */
import { Button, withStyles } from "@material-ui/core";

const PrimaryButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
    width: "max-content",
    fontWeight: 500,
    padding: "8px 26px",
    color: "white",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}))(Button);
export default PrimaryButton;
