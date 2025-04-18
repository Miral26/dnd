
import React from 'react';
import styled from 'styled-components';

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  padding: 0 24px;
  z-index: 1000;
`;

const TopBarLogo = styled.div`
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    height: 24px;
  }
`;

const Header = () => {
  return (
    <TopBar>
      <TopBarLogo>Othisis Medtech</TopBarLogo>
    </TopBar>
  );
};

export default Header;
