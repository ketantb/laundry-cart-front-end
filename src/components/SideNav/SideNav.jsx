import React from "react";
import home from "./home.svg";
import list from "./list.png";
import more from "./more.svg";
import Products from "../CreateOrderComponent/Products/Products";
import { Link} from "react-router-dom";

import "./SideNav.css";
import CreateOrder from "../CreateOrderComponent/CreateOrder/CreateOrder";



const SideNav = (props) => {
  return (
    <aside>

    <div className="container">

      <ul className="sidebar">
        <li><span>
          <Link to={'/'}><img className="vnavicon" src={home} alt="profilepic" /></Link>
        </span></li>
        {/* onClick={(e)=>e.target.style="background-color:white;color :black"} */}
        <li><span>
          <Link to={"/order"}><img    className="vnavicon" src={more} alt="profilepic" /></Link>
        </span></li>
        <li><span>
          <Link to={"/pastorder"}><img className="vnavicon" src={list} alt="profilepic" /></Link>
        </span></li>


      </ul>

      <div className="content">
        <CreateOrder />
          <Products user={props.user} />

      </div>
    </div>

    </aside>
  );
};

export default SideNav;
