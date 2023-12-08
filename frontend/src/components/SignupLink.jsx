import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/SignupLink.css';

function SignupLink() {
  return (
    <div>
      <div className="signup-link-wrap">
        <div className="signup-text-wrap">
          <p className="st1">회원가입하고</p>
          <p className="st2">다양한 혜택</p>
          <p className="st1">확인하세요!</p>
        </div>
        <Link to="/signup" className="move-to-signup">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default SignupLink;
