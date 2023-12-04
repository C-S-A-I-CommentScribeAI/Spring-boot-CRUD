import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/FreePosts.css';
import { useLocation } from 'react-router-dom';
import parser from 'html-react-parser';

function FreePosts({ info }) {
  const location = useLocation();
  const { viewContent } = location.state || {};

  FreePosts.propTypes = {
    // "missing in props validation" 오류 해결법
    info: PropTypes.string.isRequired, // string 타입으로 설정함. 실제 타입에 맞게 설정해주세요.
  };

  return (
    <div>
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
        {info !== undefined ? (
          info.map((naeyong) => (
            <div className="post" key={naeyong.id}>
              <div className="row">
                <span className="number">{naeyong.id}</span>
                <h2 className="title">{naeyong.jaemok}</h2>
                <p className="content">{naeyong.naeyong}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="post">
            <p>No content yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FreePosts;
