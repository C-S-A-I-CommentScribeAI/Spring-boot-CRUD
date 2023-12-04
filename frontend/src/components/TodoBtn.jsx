import React from 'react';
import '../styles/components/TodoBtn.css';
import Todo from '../assets/images/Todo.png';
import Jjangu1 from '../assets/images/Jjangu1.png';

function TodoBtn() {
  return (
    <div>
      <div className="todo-container">
        <div className="todo-textwrap">
          <h className="title3">자신의 하루를</h>
          <h className="title4">관리해보세요!!</h>
        </div>
        <img src={Todo} alt="todo" className="todo-img" />
        <img src={Jjangu1} alt="jjangu" className="jjangju1-img" />
      </div>
    </div>
  );
}

export default TodoBtn;
