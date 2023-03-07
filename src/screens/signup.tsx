import React from "react";
import "../styles/screens/signup.scss";

export const Signup = () => {
  return (
    <div className="signup">
      <div className="signup-body">
        <div className="text">회원가입</div>
        <input placeholder="아이디를 입력하세요"></input>
        <input placeholder="닉네임을 입력하세요"></input>
        <input placeholder="비밀번호를 입력하세요"></input>
        <input placeholder="한번 더 입력하세요"></input>
        <button>회원가입 하기</button>
      </div>
    </div>
  );
};
