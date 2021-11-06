import { FunctionComponent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/system";

import Image from "../../assets/ProfilePicture.jpeg";
import Options from "../../components/Options";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    borderRadius: "15px",
    width: "100%",
    boxShadow: "0px 5px 9px -7px rgba(0, 0, 0, 0.75)",
    padding: "20px",
    marginBottom: "1.5rem",
  },
});
const Post: FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img src={Image} width="56" height="56" className="rounded-circle mr-3" />
      <strong className="m-2">Developer</strong>
      <small className="text-muted ">5m ago</small>
      <Typography variant="body2" className="mt-2">
        A developer is a computer science specialist who creates computer
        software and applications. They are proficient in the use of computer
        programming languages, which they use to write the code which performs
        the softwares functions. A developer is an individual that builds and
        create software and applications. He or she writes, debugs and executes
        the source code of a software application. A developer is also known as
        a software developer, computer programmer, programmer, software coder or
        software engineer
      </Typography>
      <hr />
      <Options />
    </Box>
  );
};

export default Post;
