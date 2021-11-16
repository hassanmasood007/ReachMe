import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import PrimaryButton from "../Buttons/PrimaryButton";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Container, Box, Grid, Typography } from "@mui/material";

const LoginForm: FunctionComponent = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Input
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Input
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Box mt={1}>
            <PrimaryButton type="submit" fullWidth variant="contained">
              LogIn
            </PrimaryButton>
          </Box>
          <Grid mt={1} container justifyContent="center">
            <Grid item>
              <Link to="/signup">{"Don't have an account? SignUp Here"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
