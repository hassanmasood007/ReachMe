import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';


import { useHistory } from 'react-router';
import { FunctionComponent, useState } from 'react';


const Navbar: FunctionComponent = () => {
  const drawerWidth = 220;

  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }

  const Main = styled('main')
  (({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
  }));

  const AppBar = styled(MuiAppBar, {

    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'],
      {

        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const menuItems = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Profile',
      path: '/profile',
    },
    {
      text: 'Feed',
      path: '/feed',
    },
    {
      text: 'Notification',
      path: '/notification',
    },
    {
      text: 'About',
      path: '/about',
    },
    {
      text: 'Login',
      path: '/login',
    },
    {
      text: 'Signup',
      path: '/signup',
    },

  ]

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));
  const history = useHistory()
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" style={{ background: '#202020' }} open={open} >
        <Toolbar >
          <IconButton

            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Reach Me
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}

      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => {
                history.push(item.path);
                handleDrawerClose();
              }}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main />
    </Box>

  );
}

export default Navbar;
