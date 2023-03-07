import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/topmenu.scss";

export const TopMenu = () => {
  return (
    <div className="top">
      <Link to="/">
        <div className="logo">Shop</div>
      </Link>
      <div className="topmenu">
        <Link to="/shop">
          <div className="menu">SHOP</div>
        </Link>
        <div className="menu">text</div>
        <div className="menu">text</div>
        <div className="menu">text</div>
      </div>
      <div className="user">
        <div className="login">login</div>
        <div className="join">join</div>
      </div>
    </div>
  );
};
