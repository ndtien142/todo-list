import React, { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";

interface Props {
  valuePage: number;
  children?: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children, valuePage }) => {
  return (
    <Fragment>
      <Navbar valuePage={valuePage} />
      {children}
      {/* {Footer} */}
    </Fragment>
  );
};

export default Layout;
