import React from "react";
import "../styles/screens/login.scss";

export const Login = () => {
  return (
    <div className="login">
      <div className="lg-body">
        <div className="text">로그인</div>
        <input placeholder="아이디를 입력하세요"></input>
        <input placeholder="비밀번호를 입력하세요"></input>
        <button>로그인하기</button>
      </div>
    </div>
  );
};
