import React from 'react';
import '../styles/components/Header.css';
import logo from '../assets/images/logo.png';
import set from '../assets/images/settings.png';

function Header() {
  return (
    <div>
      <div className="container">
        <div className="logo-wrap">
          <img src={logo} alt="logo" className="logo-icon" />
        </div>
        <div className="btn.wrap">
          <button className="login-btn" type="button">
            로그인
          </button>
          <button className="sign-btn" type="button">
            회원가입
          </button>
          <img src={set} alt="settings" className=".settings-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
