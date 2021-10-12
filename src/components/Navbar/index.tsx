import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from "../Menu";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    background: "none",
    boxShadow: "none",
  },
});

const Header: FunctionComponent = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root}>
        <Toolbar>
          <Drawer />
          <Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              onClick={() => {
                history.push("/");
              }}
            >
              Reach Me
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
