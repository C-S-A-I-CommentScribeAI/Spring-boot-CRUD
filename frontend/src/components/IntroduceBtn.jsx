import React from 'react';
import '../styles/components/IntroduceBtn.css';
import { useNavigate } from 'react-router-dom';
import Study from '../assets/images/study.png';

function IntroduceBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/intro');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/intro');
    }
  };

  return (
    <div>
      <div
        className="intro-container"
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        tabIndex="0"
        role="button"
      >
        <div className="intro-textwrap">
          <h className="title1">C.S.A.I의</h>
          <h className="title2">다양한 공부법을 만나보세요!</h>
        </div>
        <img src={Study} alt="study" className="study-img" />
      </div>
    </div>
  );
}

export default IntroduceBtn;
