import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/topmenu.scss";

export const TopMenu = () => {
  return (
    <div className="top">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <div className="logo">Shop</div>
      </Link>
      <div className="topmenu">
        <Link to="/shop" style={{ textDecoration: "none", color: "black" }}>
          <div className="menu">SHOP</div>
        </Link>
        <div className="menu">text</div>
        <div className="menu">text</div>
        <div className="menu">text</div>
      </div>
      <div className="user">
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          <div className="login">login</div>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <div className="signup">signup</div>
        </Link>
      </div>
    </div>
  );
};
