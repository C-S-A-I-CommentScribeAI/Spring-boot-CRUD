import React from 'react';
import '../styles/components/SocialLogin.css';
import Naver from '../assets/images/naver.png';
import Kakao from '../assets/images/kakao.png';

function SocialLogin() {
  return (
    <div>
      <div className="social-login-wrap">
        <div className="naver-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
            className="naver-icon"
          >
            <circle cx="39.5" cy="39" r="38.5" fill="white" stroke="#EFEFEF" />
            <image
              href={Naver} // 이미지 파일 경로
              x="19" // 가운데 정렬
              y="19" // 가운데 정렬
              width="40"
              height="40"
            />
          </svg>
          <p className="naver-content">
            네이버
            <br />
            로그인
          </p>
        </div>

        <div className="kakao-wrap">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
            className="kakao-icon"
          >
            <circle cx="39.5" cy="39" r="38.5" fill="white" stroke="#EFEFEF" />
            <image
              href={Kakao}
              x="19" // 가운데 정렬
              y="19" // 가운데 정렬
              width="40"
              height="40"
            />
          </svg>
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
