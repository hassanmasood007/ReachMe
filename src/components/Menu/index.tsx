import { FunctionComponent, useState } from "react";
import { useHistory } from "react-router";
import {
  Box,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const Drawer: FunctionComponent = () => {
  const history = useHistory();
  const useStyles = makeStyles({
    list: {
      width: 250,
    },
  });
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();
  const menuItems = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Profile",
      path: "/profile",
    },
    {
      text: "Feed",
      path: "/feed",
    },
    {
      text: "Notification",
      path: "/notification",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Login",
      path: "/login",
    },
    {
      text: "Signup",
      path: "/signup",
    },
  ];

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon></MenuIcon>
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <div className={classes.list}>
          <Box p={2}>
            <Typography variant="h5" id="head">
              Reach Me
            </Typography>
          </Box>
          <Divider />
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => {
                  history.push(item.path);
                  setOpen(false);
                  document.getElementById("head")?.focus();
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Drawer;
