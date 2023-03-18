import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/components/topmenu.scss";

export const TopMenu = () => {
  const activeStyle: any = {
    color: "green",
    textDecoration: "none",
  };
  return (
    <div className="top">
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? activeStyle : { textDecoration: "none" }
        }
      >
        <div className="logo" style={{ textDecoration: "none" }}>
          SHOP
        </div>
      </NavLink>
      <div className="topmenu">
        <NavLink
          to="/shop"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <div className="menu">Shopping</div>
        </NavLink>
        <NavLink
          to="/text"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <div className="menu">text1</div>
        </NavLink>
        <NavLink
          to="/text"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <div className="menu">text2</div>
        </NavLink>
        <NavLink
          to="/text"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <div className="menu4">text3</div>
        </NavLink>
      </div>
      <div className="user">
        <NavLink
          to="/login"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <div className="login">login</div>
        </NavLink>
        <NavLink
          to="/signup"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <div className="signup">signup</div>
        </NavLink>
      </div>
    </div>
  );
};
