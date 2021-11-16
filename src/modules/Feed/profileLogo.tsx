import { Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import Image from "../../assets/ProfilePicture.jpeg";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const ProfileLogo: FunctionComponent = () => {
  return (
    <Box className="text-center mb-4">
      <img
        src={Image}
        className="rounded-circle mr-3"
        width="158"
        height="158"
      />
      <Typography className="mt-2 mb-0">Hassan & Talal</Typography>

      <Box className="text-muted">
        <Typography variant="body2">Front-end Developer</Typography>
      </Box>
      <NavLink to="/Profile">
        <PrimaryButton>View Profile</PrimaryButton>
      </NavLink>
    </Box>
  );
};

export default ProfileLogo;
