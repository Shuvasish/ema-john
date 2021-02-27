import React from "react";
import img from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={img} alt="logo" className="" />
      <nav>
        <a href="/show">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory Here</a>
      </nav>
    </div>
  );
};

export default Header;
