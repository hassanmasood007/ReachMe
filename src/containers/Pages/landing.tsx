import { Box } from "@mui/system";
import { FunctionComponent } from "react";
import Introduction from "../../modules/Landing/Introduction";
import MoreDetails from "../../modules/Landing/MoreDetails";

const landing: FunctionComponent = () => {
  return (
    <Box>
      <Introduction />
      <MoreDetails />
    </Box>
  );
};

export default landing;
