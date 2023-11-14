import React from 'react';
import '../styles/components/MidTopBar.css';

class MidTopBar extends React.Component {
  handleFAQClick = () => {
    this.GA_Event('고객센터', '고객센터탭', 'FAQ');
  };

  handleInquiryClick = () => {
    this.GA_Event('고객센터', '고객센터탭', '1:1문의');
  };

  render() {
    return (
      <div className="pageTitle bg_blue">
        <div className="layout1">
          <h2 className="title">고객센터</h2>
          <p className="desc">
            C.I.S.A에 대해 궁금하신 점이 있다면 무엇이든 물어보세요
          </p>
          <div className="pageTab">
            <div className="tab_ui type1">
              <div className="tab_wrap">
                <ul className="tab_inner">
                  <li className="tab">
                    <button
                      type="button"
                      onClick={this.handleFAQClick}
                      className="button-style"
                    >
                      <span>FAQ</span>
                    </button>
                  </li>
                  <li className="tab active">
                    <button
                      type="button"
                      onClick={this.handleInquiryClick}
                      className="button-style"
                    >
                      <span>1:1 문의</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MidTopBar;
