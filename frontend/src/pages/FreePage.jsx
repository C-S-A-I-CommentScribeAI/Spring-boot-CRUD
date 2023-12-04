import React, { useState } from 'react';
import '../styles/pages/Free.css';
import Header from '../components/Header';
import InforBar from '../components/InforBar';
import SearchBar from '../components/SearchBar';
import FreePosts from '../components/FreePosts';
import FreePostination from '../components/FreePostination';
import FootBar from '../components/FootBar';

function FreePage() {
  const itemsPerPage = 5; // 페이지당 항목 수
  const [currentPage, setCurrentPage] = useState(1);

  const freeContent = [
    { id: 2, jaemok: '이승욱', naeyong: '20190926' },
    { id: 3, jaemok: '유다은', naeyong: '20210936' },
    { id: 4, jaemok: '소진수', naeyong: '20190914 ' },
    { id: 5, jaemok: '우아한막내들', naeyong: 'CSAI' },
    { id: 6, jaemok: '성결대학교', naeyong: '경기도 안양시' },
    { id: 7, jaemok: '미국의 수도', naeyong: '워싱턴' },
    { id: 8, jaemok: '태국의 수도', naeyong: '방콕' },
    { id: 9, jaemok: '프론트엔드', naeyong: '자바스크립트' },
    { id: 10, jaemok: '맨체스터 시티', naeyong: '올해도 챔스 우승가자' },
  ];

  // currentPage에 따라 현재 페이지의 항목을 계산합니다.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = freeContent.slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 변경 함수
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="container">
        <div className="main-wrap">
          <Header />
          <InforBar />
          <div className="related-board-wrap">
            <p className="p">전체 {freeContent.length + 3}건</p>
            <SearchBar />
          </div>
          <FreePosts info={currentItems} />
          <FreePostination
            itemsPerPage={itemsPerPage}
            totalItems={freeContent.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <FootBar />
        </div>
      </div>
    </div>
  );
}

export default FreePage;
