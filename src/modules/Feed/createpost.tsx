import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { TextField, Typography } from "@material-ui/core";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import Image from "../../assets/ProfilePicture.jpeg";

const Input = styled("input")({
  display: "none",
});

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    boxShadow: "0px 5px 9px -7px rgba(0, 0, 0, 0.75)",
    padding: "10px",
    marginBottom: "1rem",
  },
  main: {
    display: "flex",
    paddingBottom: "8px",
  },
  field: {
    paddingLeft: "1rem",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 9,
    margin: "20px",
  },
  title: {
    color: "white",
  },
});
const CreatePost: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <img
          src={Image}
          width="56"
          height="56"
          className="rounded-circle mr-3"
        />
        <TextField
          className={classes.field}
          fullWidth
          placeholder="What's on your mind?"
          variant="outlined"
        ></TextField>
      </Box>
      <Box className={classes.options}>
        <Button
          variant="text"
          style={{ textTransform: "lowercase" }}
          startIcon={<VideocamIcon color="error" />}
        >
          <Typography className={classes.title}>Live/Video</Typography>
        </Button>

        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button
            style={{ textTransform: "lowercase" }}
            variant="text"
            startIcon={<PhotoLibraryIcon color="success" />}
            component="span"
          >
            <Typography className={classes.title}>Photo/Video</Typography>
          </Button>
        </label>

        <Button
          variant="text"
          style={{ textTransform: "lowercase" }}
          startIcon={<InsertEmoticonIcon style={{ color: "yellow" }} />}
        >
          <Typography className={classes.title}>Feeling/Activity</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
