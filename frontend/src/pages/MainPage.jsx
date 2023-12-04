import React from 'react';
import '../styles/pages/Main.css';
import Header from '../components/Header';
import IntroduceBtn from '../components/IntroduceBtn';

function MainPage() {
  return (
    <div>
      <div className="container">
        <div className="main-wrap">
          <Header />
          <div>
            <IntroduceBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
