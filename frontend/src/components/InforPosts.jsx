import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import parser from 'html-react-parser';
import '../styles/components/InforPosts.css';

function InforPosts({ inforInfo }) {
  const location = useLocation();
  const { viewContent } = location.state || {};

  return (
    <div>
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
        {inforInfo !== undefined ? (
          inforInfo.map((naeyong) => (
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

InforPosts.propTypes = {
  inforInfo: PropTypes.string.isRequired,
};

export default InforPosts;
