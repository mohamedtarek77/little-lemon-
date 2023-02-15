import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="container">
      <img alt="logo" src={logo} />
      <ul className="links">
        <li> <Link to='/'>Home</Link></li>
        {/* <Link to='/'> <li>Home </li></Link>  */}

        <li> About</li> 
        <li>Menu</li> 
        <li> <Link to='/bookingPage'>Reservations</Link></li>
        <li>Order online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
