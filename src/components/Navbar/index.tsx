import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@mui/material";
import { FunctionComponent } from "react";
import Drawer from "../Menu";

const Header: FunctionComponent = () => {
  return (
    <>
      <AppBar position="sticky" style={{ background: "#202020" }}>
        <Toolbar>
          <Drawer />
          <Box>
            <Typography variant="h6" noWrap component="div">
              Reach Me
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
