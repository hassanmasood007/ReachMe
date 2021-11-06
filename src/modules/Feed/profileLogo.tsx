import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import Image from "../../assets/ProfilePicture.jpeg";

const ProfileLogo: FunctionComponent = () => {
  return (
    <Box className="text-center mb-4">
      <img
        src={Image}
        className="rounded-circle mr-3"
        width="158"
        height="158"
      />
      <h4 className="mt-2 mb-0">Hassan & Talal</h4>
      <Box className="text-muted">Front-end Developer</Box>
      <NavLink to="/Profile">
        <button type="button" className="btn btn-primary m-0">
          View Profile
        </button>
      </NavLink>
    </Box>
  );
};

export default ProfileLogo;
