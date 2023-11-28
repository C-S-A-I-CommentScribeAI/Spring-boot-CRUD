import React from 'react';
import { useLocation } from 'react-router-dom';
import parser from 'html-react-parser';
import '../styles/pages/Free.css';
import Header from '../components/Header';
import InforBar from '../components/InforBar';
import SearchBar from '../components/SearchBar';
import FootBar from '../components/FootBar';

function FreePage() {
  const location = useLocation();
  const { viewContent } = location.state || {};

  const freeContent = [
    { id: 2, jaemok: '이승욱', naeyong: '20190926' },
    { id: 3, jaemok: '유다은', naeyong: '20210936' },
    { id: 4, jaemok: '소진수', naeyong: '20190914 ' },
    { id: 5, jaemok: '우아한막내들', naeyong: 'CSAI' },
    { id: 6, jaemok: '성결대학교', naeyong: '경기도 안양시' },
  ];

  return (
    <div>
      <div className="container">
        <div className="main-wrap">
          <Header />
          <InforBar />
          <div className="related-board-wrap">
            <p className="p">전체 {freeContent.length + 1}건</p>
            <SearchBar />
          </div>

          <div className="freeboard-wrap">
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

          <div className="freeboard-wrap">
            {freeContent.map((naeyong) => (
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

export default FreePage;
