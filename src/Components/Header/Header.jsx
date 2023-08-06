import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img  className="imgx" src={logo} alt="" />
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Orders</a>
        <a href="/Inventory">Inventory</a>
        <a href="/log in">Log in</a>
      </div>
    </nav>
  );
};

export default Header;
