import { FunctionComponent } from "react";

import Header from "../../components/Navbar";

const HomeLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
