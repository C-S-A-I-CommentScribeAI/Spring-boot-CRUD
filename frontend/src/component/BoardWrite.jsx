import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import '../style/components/BoardWrite.css';

function BoardWrite() {
  /* const navigate = useNavigate();
  const moveToFree = () => {
    // 목록 버튼 클릭 시 게시판으로 이동하는 함수, 버튼에 onClick 함수 작성하면 됨
    navigate('/free');
  }; */

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div>
      <div className="contaier">
        <input
          className="title-input"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="content-wrap">
          <button className="submit-btn" type="button">
            올리기
          </button>
          <textarea
            className="content-textarea"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="list-wrap">
          <button className="list-btn" type="button">
            목록
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoardWrite;
