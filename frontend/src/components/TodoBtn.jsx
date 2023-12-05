import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/TodoBtn.css';
import Todo from '../assets/images/Todo.png';
import Jjangu1 from '../assets/images/jjangu1.png';

function TodoBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/todo');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate('/todo');
    }
  };

  return (
    <div>
      <div
        className="todo-container"
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        tabIndex="0"
        role="button"
      >
        <div className="todo-textwrap">
          <h className="title3">자신의 하루를</h>
          <h className="title4">관리해보세요!!</h>
        </div>
        <img src={Todo} alt="todo" className="todo-img" />
        <img src={Jjangu1} alt="jjangu" className="jjangu1-img" />
      </div>
    </div>
  );
}

export default TodoBtn;
