import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Grid, Typography } from "@mui/material";
import React from "react";

const LoginForm: FunctionComponent = () => {
  return (
    <>
      <Grid
        style={{ minHeight: "100vh" }}
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h4" color="primary">
            Login Form
          </Typography>
        </Grid>
        <Grid item>
          <Input type="email" label="Email" color="primary"></Input>
        </Grid>
        <Grid item>
          <Input type="password" label="Password" color="primary"></Input>
        </Grid>
        <Grid item>
          <PrimaryButton>LOGIN</PrimaryButton>
        </Grid>
        <Grid item>
          <Link to="/signup">Not Registered? Click Here</Link>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
