import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from './page/MainPage';
import IntroPage from './page/IntroPage';
import LoginPage from './page/LoginPage';
import SignUpPage from './page/SignUpPage';
import InformationPage from './page/InformationPage';
import InformationWrite from './page/InformationWrite';
import FreePage from './page/FreePage';
import FreeWrite from './page/FreeWrite';
import ServicePage from './page/ServicePage';
import ServiceWrite from './page/ServieWrite';
import AskPage from './page/AskPage';
import AskWrite from './page/AskWrite';
import NoticePage from './page/NoticePage';
import NoticeWrite from './page/NoticeWrite';
import TodoPage from './page/TodoPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="intro" element={<IntroPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="information" element={<InformationPage />} />
        <Route path="inforwrite" element={<InformationWrite />} />
        <Route path="free" element={<FreePage />} />
        <Route path="freewrite" element={<FreeWrite />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="servicewrite" element={<ServiceWrite />} />
        <Route path="ask" element={<AskPage />} />
        <Route path="askwrite" element={<AskWrite />} />
        <Route path="notice" element={<NoticePage />} />
        <Route path="noticewrite" element={<NoticeWrite />} />
        <Route path="todo" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
