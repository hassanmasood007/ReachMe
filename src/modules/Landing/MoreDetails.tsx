import Typography from "@mui/material/Typography";
import { FunctionComponent } from "react";
import { ThemeProvider } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";

import Theme from "../../helpers/Theme";

const useStyles = makeStyles({
  root: {
    color: "#ffc092",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    paddingRight: 250,
    paddingLeft: 250,
  },
});

const MoreDetails: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
      <Box className={classes.root} id="Details">
        <Typography variant="body1" align="center">
          Reach Me is a free, online photo-sharing application and social
          network platform.Reach Me allows users to upload photos and short
          videos. Users can add a caption to each of their posts and use
          hashtags and location-based geotags to index these posts and make them
          searchable by other users. Reach Me is not only a tool for
          individuals, but also for businesses. The photo-sharing app offers
          companies the opportunity to start a free business account to promote
          their brand and products.
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default MoreDetails;
