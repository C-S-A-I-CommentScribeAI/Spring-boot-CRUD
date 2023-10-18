import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import set from '../assets/images/settings.png';

function Header() {
  return (
    <Container>
      <LogoWrap>
        <LogoIcon src={logo} alt="logo" />
      </LogoWrap>
      <BtnWrap>
        <LoginBtn>로그인</LoginBtn>
        <SignBtn>회원가입</SignBtn>
        <SettingsIcon src={set} alt="settings" />
      </BtnWrap>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid black;
`;

const LogoWrap = styled.div``;

const LogoIcon = styled.img`
  margin: 15px;
`;

const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;

const LoginBtn = styled.button`
  margin: 10px;
  font-family: DM Serif Display;

  border: none;
  background-color: transparent; /* 배경색을 투명색으로 설정 */
  color: #a9a4a4;
`;

const SignBtn = styled.button`
  margin: 10px;
  font-family: DM Serif Display;

  border: none;
  background-color: transparent; /* 배경색을 투명색으로 설정 */
  color: #a9a4a4;
`;

const SettingsIcon = styled.img`
  margin-left: 10px; /* 설정 아이콘과 로그인/회원가입 버튼 사이의 여백 설정 */
  margin-right: 8.98px;

  cursor: pointer;
`;
