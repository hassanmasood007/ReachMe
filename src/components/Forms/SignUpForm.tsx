import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Grid, Typography } from "@mui/material";

const SignUpForm: FunctionComponent = () => {
  return (
    <>
      <form>
        <Grid
          style={{ minHeight: "100vh" }}
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h4">SignUp Form</Typography>
          </Grid>
          <Grid item>
            <Input type="text" label="Name" color="primary"></Input>
          </Grid>
          <Grid item>
            <Input type="email" label="Email" color="primary"></Input>
          </Grid>
          <Grid item>
            <Input type="password" label="Password" color="primary"></Input>
          </Grid>
          <Grid item>
            <Input
              type="password"
              label="Confirm Password"
              color="primary"
            ></Input>
          </Grid>
          <Grid item>
            <PrimaryButton>SIGN UP</PrimaryButton>
          </Grid>
          <Grid item>
            <Link to="/login">Already Registered? Click Here</Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default SignUpForm;
