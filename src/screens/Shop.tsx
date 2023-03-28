import React from "react";
import { Link } from "react-router-dom";
import "../styles/screens/shop.scss";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shop-body">
        <Link to="/upload">
          <button className="shop-button">상품올리기</button>
        </Link>
        <div className="shop-board"></div>
      </div>
    </div>
  );
};
