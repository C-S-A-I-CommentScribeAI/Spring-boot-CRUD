import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/InforBar.css';

function InforBar() {
  return (
    <div className="mid-top-bar">
      <div className="customer-center">게시물</div>
      <div className="cisa-question">자유롭게 글을 올려보세요!</div>

      <div className="move-page">
        <Link to="/freewrite">
          <div className="free">자유게시판</div>
        </Link>

        <Link to="/information">
          <div className="information" type="button">
            정보게시판
          </div>
        </Link>
      </div>
    </div>
  );
}

export default InforBar;
