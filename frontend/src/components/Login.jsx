import React, { useState } from 'react';
import '../styles/components/Login.css';
import EyeIcon from '../assets/images/eyeIcon.png';

function Login() {
  const MAX_EMAIL_LENGTH = 20; // 최대 이메일 길이
  const MAX_PASSWORD_LENGTH = 14; // 최대 비밀번호 길이
  const [showPassword, setShowPassword] = useState(false); //  눈 아이콘 패스워드 보이기

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // 눈 아이콘 토글
  };

  return (
    <div>
      <div className="login-container">
        <h className="login-subtitle">로그인</h>
        <div className="field-wrap">
          <input
            type="text"
            placeholder="아이디를 입력하세요"
            className="id-field"
            maxLength={MAX_EMAIL_LENGTH}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력하세요(영문, 숫자, 특수문자 포함 8~30자)"
            className="pw-field"
            maxLength={MAX_PASSWORD_LENGTH}
          />
          <button
            className="eye-button"
            onClick={toggleShowPassword}
            type="button"
          >
            <img src={EyeIcon} alt="눈 아이콘" className="eye-icon" />
          </button>
        </div>

        <div className="extra-wrap">
          <label htmlFor="saveId">
            {/* 라벨과 인풋 요소를 같은 부모 요소 내에 배치 */}
            <input
              type="checkbox"
              className="saveid-cb"
              id="saveId"
              name="saveId"
            />
            아이디 저장
          </label>
          <div className="search-wrap">
            <p className="search-id">아이디 찾기</p>
            <p className="search-pw">비밀번호 찾기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
