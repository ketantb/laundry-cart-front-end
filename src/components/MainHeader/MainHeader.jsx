import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import Dp from './profilepic.jpg'
import './MainHeader.css'
import {useNavigate} from 'react-router-dom'

const MainHeader = (props) => {

  // console.log(props.user.Name)
    const logout = (e)=>{
        console.log("hi....")
        localStorage.clear()
      }
      return (
        <nav className="header">
        <li className="header-left Avenir-700-20"><b>LAUNDRY</b></li>
        <ul className="header-right">
          <li className="light-text">
            pricing</li>
          <li className="light-text Avenir-14">career</li>
          <div className="header-nav">
            <span><img className='userImg' src={Dp} alt="dp" /></span>
            <p className='user Avenir-14'>{props.user.Name}</p>
            <span>{localStorage.getItem("name")}</span> 
            <Link to={"/"}>
              <span>             
                <button  className="logout Avenir-14" onClick={logout}>Log Out</button>
              </span>
            </Link>        
          </div>
        </ul>
      </nav>
      );
}

export default MainHeader