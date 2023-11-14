import React, { useState } from 'react';
import '../style/components/HeaderMenu.css';
import logo from '../assets/images/logo.png';
import set from '../assets/images/settings.png';

function HeaderMenu() {
  const [isIntroMenuOpen, setIntroMenuOpen] = useState(false);
  const [isNoticeMenuOpen, setNoticeMenuOpen] = useState(false);
  const [isTodoMenuOpen, setTodoMenuOpen] = useState(false);
  const [isCustomMenuOpen, setCustomMenuOpen] = useState(false);

  return (
    <div>
      <div className="container">
        <div className="logo-wrap">
          <img src={logo} alt="logo" className="logo-icon" />
        </div>
        <div className="menu-wrap">
          <div
            className="intro"
            onMouseEnter={() => setIntroMenuOpen(true)}
            onMouseLeave={() => setIntroMenuOpen(false)}
          >
            소개
            {isIntroMenuOpen && (
              <div className="drop-menu-wrap">
                <div className="drop-menu">회사소개</div>
              </div>
            )}
          </div>
          <div
            className="notice"
            onMouseEnter={() => setNoticeMenuOpen(true)}
            onMouseLeave={() => setNoticeMenuOpen(false)}
          >
            게시물
            {isNoticeMenuOpen && (
              <div className="drop-menu-wrap">
                <div className="drop-menu">자유게시판</div>
                <div className="drop-menu">정보게시판</div>
              </div>
            )}
          </div>
          <div
            className="todo"
            onMouseEnter={() => setTodoMenuOpen(true)}
            onMouseLeave={() => setTodoMenuOpen(false)}
          >
            Todolist
            {isTodoMenuOpen && (
              <div className="drop-menu-wrap">
                <div className="drop-menu">Todolist</div>
              </div>
            )}
          </div>
          <div
            className="custom"
            onMouseEnter={() => setCustomMenuOpen(true)}
            onMouseLeave={() => setCustomMenuOpen(false)}
          >
            고객센터
            {isCustomMenuOpen && (
              <div className="drop-menu-wrap">
                <div className="drop-menu">FAQ</div>
                <div className="drop-menu">1:1문의</div>
                <div className="drop-menu">공지사항</div>
              </div>
            )}
          </div>
        </div>
        <div className="btn-wrap">
          <button className="login-btn" type="button">
            로그인
          </button>
          <button className="sign-btn" type="button">
            회원가입
          </button>
          <img src={set} alt="settings" className="settings-icon" />
        </div>
      </div>
    </div>
  );
}

export default HeaderMenu;
