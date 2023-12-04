import React, { useState } from 'react';
import '../styles/pages/Infor.css';
import Header from '../components/Header';
import InforBar from '../components/InforBar';
import SearchBar from '../components/SearchBar';
import InforPosts from '../components/InforPosts';
import InforPostination from '../components/InforPostination';
import FootBar from '../components/FootBar';

function InformationPage() {
  const inforItemsPerPage = 5;
  const [currentInforPage, setCurrentInforPage] = useState(1);

  const inforContent = [
    { id: 2, jaemok: '여기는', naeyong: '정보게시판' },
    { id: 3, jaemok: '부드러운', naeyong: '여행용 티슈' },
    { id: 4, jaemok: '서울대학교', naeyong: '서울특별시 관악구 ' },
    { id: 5, jaemok: '우아한형제들', naeyong: '배달의 민족' },
    { id: 6, jaemok: '건국대학교', naeyong: '서울특별시 광진구' },
    { id: 7, jaemok: '홍익대학교', naeyong: '서울특별시 마포구' },
    { id: 8, jaemok: '호주의 수도', naeyong: '시드니' },
    { id: 9, jaemok: '앱 프레임워크', naeyong: 'Flutter' },
    { id: 10, jaemok: '한화이글스', naeyong: '내년에는 가을야구 가자' },
  ];

  const inforIndexOfLastItem = currentInforPage * inforItemsPerPage;
  const inforOfFirstItem = inforIndexOfLastItem - inforItemsPerPage;
  const inforCurrentItems = inforContent.slice(
    inforOfFirstItem,
    inforIndexOfLastItem,
  );

  const paginate = (pageNumber) => {
    setCurrentInforPage(pageNumber);
  };
  return (
    <div>
      <div className="container">
        <div className="main-wrap">
          <Header />
          <InforBar />
          <div className="related-board-wrap">
            <p className="p">전체 {inforContent.length + 3}건</p>
            <SearchBar />
          </div>
          <InforPosts inforInfo={inforCurrentItems} />
          <InforPostination
            inforItemsPerPage={inforItemsPerPage}
            inforTotalItems={inforContent.length}
            paginate={paginate}
            currentInforPage={currentInforPage}
          />
          <FootBar />
        </div>
      </div>
    </div>
  );
}

export default InformationPage;
