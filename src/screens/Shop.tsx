import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/screens/shop.scss";

export const Shop = () => {
  const [isOpen, setIsOpen]: any = useState(false);
  const [boardList, setboardList]: any = useState([]);
  const navigate = useNavigate();
  return (
    <div className="shop">
      <div className="shop-body">
        <div className="body-head">
          <h1>List</h1>
          <Link to="/upload">
            <button className="shop-button">상품올리기</button>
          </Link>
        </div>

        <div className="shop-board">
          {boardList.map((item: any) => {
            <div className="board-body" key={item.id}>
              <img src="" alt="이미지" />
              <div className="body-ct">
                <div className="board-ct">
                  <div className="board-title">
                    <h3>제목</h3>
                  </div>
                  <div className="board-content">
                    <h3>내용</h3>
                  </div>
                </div>
                <button onClick={() => setIsOpen(true)} key={item.id}>
                  메뉴
                </button>
                {isOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={() => setIsOpen(false)}>
                        &times;
                      </span>

                      <button onClick={() => {}}>수정</button>
                      <button>삭제</button>
                    </div>
                  </div>
                )}
              </div>
            </div>;
          })}
          <div className="board-body">
            <img src="" alt="이미지" />
            <div className="body-ct">
              <div className="board-ct">
                <div className="board-title">
                  <h3>제목</h3>
                </div>
                <div className="board-content">
                  <h3>내용</h3>
                </div>
              </div>
              <button onClick={() => setIsOpen(true)}>메뉴</button>
              {isOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={() => setIsOpen(false)}>
                      &times;
                    </span>
                    <button
                      onClick={() => {
                        navigate("/update");
                      }}
                    >
                      수정
                    </button>
                    <button>삭제</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="board-body">
            <img src="" alt="이미지" />
            <div className="body-ct">
              <div className="board-ct">
                <div className="board-title">
                  <h3>제목</h3>
                </div>
                <div className="board-content">
                  <h3>내용</h3>
                </div>
              </div>
              <button onClick={() => setIsOpen(true)}>메뉴</button>
              {isOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={() => setIsOpen(false)}>
                      &times;
                    </span>
                    <p>수정</p>
                    <p>삭제</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <div className="board-body">
            <img src="" alt="이미지" />
            <div className="body-ct">
              <div className="board-ct">
                <div className="board-title">
                  <h3>제목</h3>
                </div>
                <div className="board-content">
                  <h3>내용</h3>
                </div>
              </div>
              <button onClick={() => setIsOpen(true)}>메뉴</button>
              {isOpen && (
                <div className="modal">
                  <div className="modal-content">
                    <span className="close" onClick={() => setIsOpen(false)}>
                      &times;
                    </span>
                    <p>수정</p>
                    <p>삭제</p>
                  </div>
                </div>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
