import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/FreeBtn.css';
import Board from '../assets/images/board.png';
import Jjangu2 from '../assets/images/jjangu2.png';

function FreeBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/free');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/free');
    }
  };

  return (
    <div>
      <div
        className="free-container"
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        tabIndex="0"
        role="button"
      >
        <div className="free-textwrap">
          <h className="title5">지금 가장 인기있는</h>
          <h className="title6">게시물</h>
        </div>
        <img src={Board} alt="board" className="board-img" />
        <img src={Jjangu2} alt="jjangu" className="jjangu2-img" />
      </div>
    </div>
  );
}

export default FreeBtn;
