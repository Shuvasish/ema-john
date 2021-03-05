import React from "react";
import { Router, Switch, Link, Route } from "react-router-dom";
import img from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={img} alt="logo" className="" />
      <nav>
        {/* <Router>
          <Link to="/shop"></Link>
        </Router> */}

        <a href="/shop">Shop</a>
        <a href="/review">Order Review</a>
        <a href="/manage">Manage Inventory Here</a>
      </nav>
    </div>
  );
};

export default Header;
