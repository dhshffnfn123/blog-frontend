import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

// 회원가입/로그인 페이지의 레이아웃을 담당하는 컴포넌트

// 화면 전체를 채움
const AuthTempleBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  /* flex로 내부 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// 흰색 박스
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTempleBlock>
      <WhiteBox>
        <div className="logo-area">
          <Link to="/">DAILY BLOG</Link>
        </div>
        {children}
      </WhiteBox>
    </AuthTempleBlock>
  );
};

export default AuthTemplate;
