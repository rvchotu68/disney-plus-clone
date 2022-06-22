import "./navigation.styles";

import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";

const Navigation = (props) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Navigation;
