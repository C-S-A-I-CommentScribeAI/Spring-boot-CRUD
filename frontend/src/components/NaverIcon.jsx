import React from 'react';
import '../styles/components/NaverIcon.css';
import Naver from '../assets/images/naver.png';

function NaverIcon() {
  const handleNaverLogin = () => {
    window.location.href = 'https://nid.naver.com/nidlogin.login';
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="79"
        height="78"
        viewBox="0 0 79 78"
        fill="none"
        className="naver-icon"
        onClick={handleNaverLogin}
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
    </div>
  );
}

export default NaverIcon;
