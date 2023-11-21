import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/InforBar.css';

function InforBar() {
  return (
    <div className="mid-top-bar">
      <div className="frame-51">
        <div className="customer-center">게시물</div>
        <div className="cisa-question">자유롭게 글을 올려보세요!</div>
      </div>
      <div className="rectangle-53" />
      <Link to="./page/InformationPage">
        <div className="frame-48">
          <div className="button faq">자유게시판</div>
        </div>
      </Link>
      <Link to="./page/InformationWrite">
        <div className="frame-48">
          <div className="button one-on-one-inquiry">정보게시판</div>
        </div>
      </Link>
    </div>
  );
}

export default InforBar;
