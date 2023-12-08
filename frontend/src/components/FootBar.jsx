import React from 'react';
import '../styles/components/FootBar.css';
import logo from '../assets/images/CSAILogo.png';
import gitLogo from '../assets/images/gitLogo.png';
import notionLogo from '../assets/images/notionLogo.png';

function FootBar() {
  return (
    <div>
      <div className="container">
        <div className="logo-wrap">
          <img src={logo} alt="footBarLogo" className="logo-icon" />
        </div>
        <div className="text-wrap">
          <div className="up">
            <div className="footer-item">이용약관</div>
            <div className="footer-item">위치기반서비스</div>
            <div className="footer-item">개인정보처리방침</div>
          </div>
          <div className="down">
            <div className="footer-item">주식회사 CSAI</div>
            <div className="footer-item">서울시 강남구 테헤란로 32길 23</div>
            <div className="footer-item">고객센터 1234-1234</div>
          </div>
        </div>
        <div className="social-wrap">
          <img src={gitLogo} alt="gitLogo" className="social-icon" />
          <img src={notionLogo} alt="notionLogo" className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default FootBar;
