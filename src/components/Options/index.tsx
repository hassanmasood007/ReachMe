import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import { Box } from "@mui/system";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "3.5rem",
    marginRight: "4rem",
  },
});

const Options: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Button
        variant="text"
        style={{ textTransform: "lowercase" }}
        startIcon={<ThumbUpIcon />}
      >
        <Typography>like</Typography>
      </Button>

      <Button
        variant="text"
        style={{ textTransform: "lowercase" }}
        startIcon={<CommentIcon />}
      >
        <Typography>comment</Typography>
      </Button>

      <Button
        variant="text"
        style={{ textTransform: "lowercase" }}
        startIcon={<ShareIcon />}
      >
        <Typography>share</Typography>
      </Button>
    </Box>
  );
};

export default Options;
