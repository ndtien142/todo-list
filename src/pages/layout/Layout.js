import React, { Fragment } from "react";
import Navbar from "../../components/ui/navbar/Navbar";

const Layout = ({ children, valuePage }) => {
  return (
    <Fragment>
      <Navbar valuePage={valuePage} />
      {children}
      {/* {Footer} */}
    </Fragment>
  );
};

export default Layout;
