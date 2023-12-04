import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/InforBar.css';

function InforBar() {
  const location = useLocation();

  const [freeBtnText, setFreeBtnText] = useState('자유게시판'); // 버튼 텍스트 저장
  const [inforBtnText, setInforBtnText] = useState('정보게시판');
  const [title, setTitle] = useState(); // 어디 게시물인지 저장
  const [explain, setExplain] = useState('자유롭게 글을 올려보세요!');

  // 목록 페이지에 있을 때는 게시판 작성으로
  // 작성 페이지에 있을 때는 OO게시판으로 변경
  const freeChangeText = () => {
    switch (location.pathname) {
      case '/free':
        setFreeBtnText('게시판 작성');
        break;

      case '/freewrite':
        setFreeBtnText('자유게시판');
        break;

      default:
        setFreeBtnText('자유게시판');
        break;
    }
  };

  const inforChangeText = () => {
    switch (location.pathname) {
      case '/information':
        setInforBtnText('게시판 작성');
        break;

      case '/inforwrite':
        setInforBtnText('정보게시판');
        break;

      default:
        setInforBtnText('정보게시판');
        break;
    }
  };

  const changeTitle = () => {
    switch (location.pathname) {
      case '/free':
        setTitle('자유게시물');
        break;

      case '/information':
        setTitle('정보게시물');
        break;

      case '/freewrite':
        setTitle('자유게시물 작성');
        break;

      case '/inforwrite':
        setTitle('정보게시물 작성');
        break;

      default:
        setTitle('게시물');
        break;
    }
  };

  const changeExplain = () => {
    switch (location.pathname) {
      case '/freewrite':
        setExplain('자유롭게 글을 작성해보세요!');
        break;

      case '/inforwrite':
        setExplain('자유롭게 글을 작성해보세요!');
        break;

      default:
        setExplain('자유롭게 글을 올려보세요!');
        break;
    }
  };

  // 컴포넌트가 렌더링될 때 실행
  useEffect(() => {
    changeTitle();
    changeExplain();
  }, [location]);

  return (
    <div className="mid-top-bar">
      <div className="customer-center">{title}</div>
      <div className="cisa-question">{explain}</div>

      <div className="move-page">
        <Link to={location.pathname === '/free' ? '/freewrite' : '/free'}>
          <button
            className="free"
            type="button"
            onMouseOver={freeChangeText}
            onMouseOut={() => setFreeBtnText('자유게시판')}
            onFocus={() => setFreeBtnText('자유게시판')}
            onBlur={() => setFreeBtnText('자유게시판')}
          >
            {freeBtnText}
          </button>
        </Link>

        <Link
          to={
            location.pathname === '/information'
              ? '/inforwrite'
              : '/information'
          }
        >
          <button
            className="information"
            type="button"
            onMouseOver={inforChangeText}
            onMouseOut={() => setInforBtnText('정보게시판')}
            onFocus={() => setInforBtnText('정보게시판')}
            onBlur={() => setInforBtnText('정보게시판')}
          >
            {inforBtnText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default InforBar;
