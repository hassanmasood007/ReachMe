import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/system";
import { Button } from "@material-ui/core";
import { useTheme, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "2rem",
    marginRight: "2rem",
  },
});

const Options: FunctionComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const showText = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box className={classes.root}>
      <Button
        variant="text"
        style={{ textTransform: "lowercase" }}
        startIcon={<ThumbUpIcon />}
      >
        {showText && <Typography>like</Typography>}
      </Button>

      <Button
        variant="text"
        style={{ textTransform: "lowercase" }}
        startIcon={<CommentIcon />}
      >
        {showText && <Typography>comment</Typography>}
      </Button>

      <Button
        variant="text"
        style={{ textTransform: "lowercase" }}
        startIcon={<ShareIcon />}
      >
        {showText && <Typography>share</Typography>}
      </Button>
    </Box>
  );
};

export default Options;
