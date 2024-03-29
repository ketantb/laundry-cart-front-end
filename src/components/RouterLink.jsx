import React from "react";

import MainHeader from "./MainHeader/MainHeader";
import SideNav from "./SideNav/SideNav";

import OrderFooter from "./OrderFooter/OrderFooter";

const RouterLink = (props) => {
  return (
    <>
      <MainHeader user={props.user} />
          <SideNav user={props.user} />
      <OrderFooter />
    </>
  );
};

export default RouterLink;
;