import React from 'react';
import { useLocation } from 'react-router-dom';
import parser from 'html-react-parser';
import '../styles/pages/Infor.css';
import Header from '../components/Header';
import InforBar from '../components/InforBar';
import SearchBar from '../components/SearchBar';
import FootBar from '../components/FootBar';

function InformationPage() {
  const location = useLocation();
  const { viewContent } = location.state || {};

  const inforContent = [
    { id: 2, jaemok: '여기는', naeyong: '정보게시판' },
    { id: 3, jaemok: '부드러운', naeyong: '여행용 티슈' },
    { id: 4, jaemok: '서울대학교', naeyong: '서울특별시 관악구 ' },
    { id: 5, jaemok: '우아한형제들', naeyong: '배달의 민족' },
    { id: 6, jaemok: '건국대학교', naeyong: '서울특별시 광진구' },
  ];

  return (
    <div>
      <div className="container">
        <div className="main-wrap">
          <Header />
          <InforBar />
          <div className="related-board-wrap">
            <p className="p">전체 {inforContent.length + 1}건</p>
            <SearchBar />
          </div>

          <div className="inforboard-wrap">
            {viewContent && viewContent.length > 0 ? (
              viewContent.map((content) => (
                <div className="post" key={content.id}>
                  <div className="row">
                    <span className="number">{content.id}</span>
                    <h2 className="title">
                      {parser(content.title)}
                      {/* content.title을 parser로 변환 */}
                    </h2>
                    <p className="content">
                      {parser(content.content)}
                      {/* content.content를 parser로 변환 */}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="post">
                <p>No content yet</p>
              </div>
            )}
          </div>

          <div className="inforboard-wrap">
            {inforContent.map((naeyong) => (
              <div className="post" key={naeyong.id}>
                <div className="row">
                  <span className="number">{naeyong.id}</span>
                  <h2 className="title">{naeyong.jaemok}</h2>
                  <p className="content">{naeyong.naeyong}</p>
                </div>
              </div>
            ))}
          </div>
          <FootBar />
        </div>
      </div>
    </div>
  );
}

export default InformationPage;
