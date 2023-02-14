import React from "react";
import home from "./home.svg";
import list from "./list.png";
import more from "./more.svg";
import { Link } from "react-router-dom";
import './sd.css'
import PastOrderHeader from "../pastOrderHeader/pastOrderHeader";
import PastOrder from "../pastOrder/pastOrder";



const SD = (props) => {
  return (
    <aside>

    <div className="container">

      <ul className="sidebar">
        <li><span>
          <Link to={'/'}><img className="vnavicon" src={home} alt="profilepic" /></Link>
        </span></li>
        <li><span>
          <Link to={"/order"}><img className="vnavicon" src={more} alt="profilepic" /></Link>
        </span></li>
        <li><span>
          <Link to={"/pastorder"}><img className="vnavicon" src={list} alt="profilepic" /></Link>
        </span></li>


      </ul>

      <div className="content">
          <PastOrderHeader/>
          <PastOrder user={props.user} />

      </div>
    </div>

    </aside>
  );
};

export default SD;
