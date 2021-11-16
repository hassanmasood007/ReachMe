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

const useStyles = makeStyles((theme) => ({
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
    marginTop: "0.5rem",
  },
  options: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    paddingRight: 40,
    paddingLeft: 40,
    [theme.breakpoints.up("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  title: {
    color: "white",
  },
  resize: {
    fontSize: 20,
  },
}));

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
          InputProps={{
            classes: {
              input: classes.resize,
            },
          }}
          className={classes.field}
          fullWidth
          placeholder="What's on your mind?"
          variant="outlined"
          size="small"
        ></TextField>
      </Box>
      <Box className={classes.options}>
        <Button
          variant="text"
          style={{ textTransform: "lowercase" }}
          startIcon={<VideocamIcon color="error" />}
        >
          <Typography variant="body2" className={classes.title}>
            Live/Video
          </Typography>
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
            <Typography variant="body2" className={classes.title}>
              Photo/Video
            </Typography>
          </Button>
        </label>

        <Button
          variant="text"
          style={{ textTransform: "lowercase" }}
          startIcon={<InsertEmoticonIcon style={{ color: "yellow" }} />}
        >
          <Typography variant="body2" className={classes.title}>
            Feeling/Activity
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default CreatePost;
