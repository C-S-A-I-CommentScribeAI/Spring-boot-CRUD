import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from './pages/MainPage';
import IntroPage from './pages/IntroPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import InformationPage from './pages/InformationPage';
import InformationWrite from './pages/InformationWrite';
import FreePage from './pages/FreePage';
import FreeWrite from './pages/FreeWrite';
import ServicePage from './pages/ServicePage';
import ServiceWrite from './pages/ServieWrite';
import AskPage from './pages/AskPage';
import AskWrite from './pages/AskWrite';
import NoticePage from './pages/NoticePage';
import NoticeWrite from './pages/NoticeWrite';
import TodoPage from './pages/TodoPage';

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
