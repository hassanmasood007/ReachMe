import { FunctionComponent, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import { Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@mui/system";

const useStyles = makeStyles({
  root: {
    minHeight: "75vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 18,
    color: "white",
  },
  textColor: {
    color: "#F2AA4CFF",
  },
  goDown: {
    color: "#F2AA4CFF",
    fontSize: "3rem",
  },
  container: {
    textAlign: "center",
    scrollBehavior: "smooth",
  },
});

const Introduction: FunctionComponent = () => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1500 } : {})}
          collapsedHeight={40}
        >
          <h1>
            Welcome to <br />
            <span className={classes.textColor}>Reach Me</span>
          </h1>
        </Collapse>
      </Box>

      <Box className={classes.container}>
        <IconButton>
          <a href="#Details">
            <ExpandMoreIcon className={classes.goDown} />
          </a>
        </IconButton>
      </Box>
    </>
  );
};

export default Introduction;
