import React from "react";
import { logo } from "../assets";
const NavBar = () => {
  return (
    <nav className="container">
      <img alt="logo" src={logo} />
      <ul className="links">
        <li>Home</li>
        <li>About</li> 
        <li>Menu</li> 
        <li>Reservations</li>
        <li>Order online</li>
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default NavBar;
