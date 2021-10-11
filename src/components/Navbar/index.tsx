import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Drawer from "../Menu";
import { useHistory } from "react-router";
// import { List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

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
            {/* <List>
              <ListItem
                button
                key="Reach Me"
                onClick={() => {
                  history.push("/");
                }}
              >
                <ListItemText primary={"Reach Me"} />
              </ListItem>
            </List> */}
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
