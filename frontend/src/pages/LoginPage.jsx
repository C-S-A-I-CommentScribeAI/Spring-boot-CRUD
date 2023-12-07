import React from 'react';
import '../styles/pages/LoginPage.css';
import Header from '../components/Header';
import Login from '../components/Login';
import Footbar from '../components/FootBar';

function LoginPage() {
  return (
    <div>
      <div className="container">
        <div className="main-wrap">
          <Header />
          <div className="login-wrap">
            <h className="login-title">C.S.A.I 로그인</h>
            <Login />
          </div>
          <Footbar />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
