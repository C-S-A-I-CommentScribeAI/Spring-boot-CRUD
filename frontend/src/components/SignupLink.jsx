import React from 'react';
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
        <p className="move-to-signup">회원가입</p>
      </div>
    </div>
  );
}

export default SignupLink;
