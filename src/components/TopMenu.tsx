import React from "react";
import "../styles/components/topmenu.scss";

export const TopMenu = () => {
  return (
    <div className="top">
      <div className="logo">쌀</div>
      <div className="topmenu">
        <div className="menu">쌀효능</div>
        <div className="menu">SHOP</div>
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
