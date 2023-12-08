import React from 'react';
import '../styles/components/SocialLogin.css';
import NaverIcon from './NaverIcon';
import KakaoIcon from './KakaoIcon';

function SocialLogin() {
  return (
    <div>
      <div className="social-login-wrap">
        <div className="naver-wrap">
          <NaverIcon />
          <p className="naver-content">
            네이버
            <br />
            로그인
          </p>
        </div>

        <div className="kakao-wrap">
          <KakaoIcon />
          <p className="kakao-content">
            카카오
            <br />
            로그인
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialLogin;
