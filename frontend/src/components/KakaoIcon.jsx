import React from 'react';
import '../styles/components/KakaoIcon.css';
import Kakao from '../assets/images/kakao.png';

function KakaoIcon() {
  const handleKakaoLogin = () => {
    window.location.href =
      'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fshopping-userauth-web.kakao.com%252Fcallback%26state%3DeyJyZWRpcmVjdFVybCI6Imh0dHBzOi8vZ2lmdC5rYWthby5jb20vYS92MS93ZWIvbG9naW4_cmVkaXJlY3RVcmw9aHR0cHMlM0ElMkYlMkZnaWZ0Lmtha2FvLmNvbSUyRmhvbWUiLCJjaGFubmVsIjoiR0lGVCJ9%26through_account%3Dtrue%26client_id%3D98020c3772c56cf7faa6aceb97b0722d#login';
  };

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="79"
        height="78"
        viewBox="0 0 79 78"
        fill="none"
        className="kakao-icon"
        onClick={handleKakaoLogin}
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
    </div>
  );
}

export default KakaoIcon;
