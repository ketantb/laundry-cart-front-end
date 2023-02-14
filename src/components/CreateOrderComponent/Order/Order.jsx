import React from "react";

import "./Order.css";

import { Link } from "react-router-dom";
import SideNav from "../../SideNav/SideNav";
import MainHeader from "../../MainHeader/MainHeader";
import OrderFooter from "../../OrderFooter/OrderFooter";
import F3 from "../../Landingpage/footer3";

const Order = (props) => {
  return (
    <>
      <MainHeader user={props.user}/>
      <div className="ordergridContainer">
        <div className="verticalnav">
          <SideNav />
        </div>
        <div className="ordercomponent">
              <div className="mainCon">
                <div>
              <p id="pBTN">Please Create Your Order</p>
            <Link className="linkstyle" to="/createorder">
          <button className="Cbtn"> create</button>
            </Link>

                </div>
              </div>
        </div>
      </div>
      <OrderFooter />
      {/* <F3/> */}
    </>
  );
};

export default Order;
