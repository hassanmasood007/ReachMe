import { Box } from "@mui/system";
import { makeStyles } from "@material-ui/core/styles";
import { FunctionComponent } from "react";
import CreatePost from "../../modules/Feed/createpost";
import Post from "../../modules/Feed/post";
import ProfileLogo from "../../modules/Feed/profileLogo";
import Search from "../../modules/Feed/search";

const useStyles = makeStyles({
  root: {
    overflowX: "hidden",
  },
});

const Feed: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className="row">
        <Box className="col-lg-4 col-xl-3 order-3 order-lg-1">
          <ProfileLogo />
        </Box>
        <Box className="col-lg-8 col-xl-6 order-1 order-lg-2">
          <CreatePost />
          <Post />
          <Post />
          <Post />
        </Box>

        <Box className="col-lg-12 col-xl-3 order-2 order-lg-3">
          <Search />
        </Box>
      </Box>
    </Box>
  );
};

export default Feed;
