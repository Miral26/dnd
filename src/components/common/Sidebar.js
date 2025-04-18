import React from 'react';
import styled from 'styled-components';
import TemplateList from '../Template/TemplateList';

const SidebarContainer = styled.div`
  width: 300px;
  background: #fff;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled.div`
  padding: 24px;
  border-bottom: 1px solid #eaeaea;
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Header>
        <Logo>Template</Logo>
      </Header>
      <TemplateList />
    </SidebarContainer>
  );
};

export default Sidebar; 