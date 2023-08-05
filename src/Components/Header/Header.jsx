import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="/shop">shop</a>
        <a href="/order">order</a>
        <a href="/Inventory">Inventory</a>
        <a href="/log in">log in</a>
      </div>
    </nav>
  );
};

export default Header;
