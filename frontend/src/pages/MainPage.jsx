import React from 'react';
import '../styles/pages/Main.css';
import Header from '../components/Header';
import IntroduceBtn from '../components/IntroduceBtn';
import TodoBtn from '../components/TodoBtn';
import FreeBtn from '../components/FreeBtn';
import FootBar from '../components/FootBar';

function MainPage() {
  return (
    <div>
      <div className="container">
        <div className="main-wrap">
          <Header />
          <div className="movetopage-wrap">
            <IntroduceBtn />
            <TodoBtn />
            <FreeBtn />
          </div>
          <FootBar />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
