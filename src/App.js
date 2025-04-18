import React, { useState } from 'react';
import styled from 'styled-components';
import TemplateList from './components/Template/TemplateList';
import RootCanalForm from './components/RootCanal/RootCanalForm';
import { FiPlay, FiShare2, FiTrash2, FiInfo } from 'react-icons/fi';
import './App.css';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #fff;
`;

const Sidebar = styled.div`
  width: 280px;
  background-color: #f8f8f8;
  padding: 24px 20px;
  border-right: 1px solid #eaeaea;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 24px;
  background-color: #fff;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #1a1a1a;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 500;
  color: #1a1a1a;
`;

const InfoIcon = styled(FiInfo)`
  color: #666;
  cursor: pointer;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background-color: ${props => props.variant === 'primary' ? '#fff' : props.variant === 'delete' ? '#fff' : '#f8f8f8'};
  color: ${props => props.variant === 'primary' ? '#1a1a1a' : props.variant === 'delete' ? '#1a1a1a' : '#1a1a1a'};
  border: ${props => props.variant === 'primary' ? '1px solid #eaeaea' : 'none'};
  
  &:hover {
    background-color: ${props => props.variant === 'primary' ? '#f8f8f8' : props.variant === 'delete' ? '#fee' : '#eee'};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 48px;
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

const defaultSections = [
  {
    id: 'subjective',
    title: 'Subjective:',
    content: ['Toothache for few days']
  },
  {
    id: 'history',
    title: 'History of Presenting Complaints:',
    content: ['Toothache: present for few days']
  },
  {
    id: 'extra-oral',
    title: 'Extra Oral Examination:',
    content: ['Not performed']
  },
  {
    id: 'intra-oral',
    title: 'Intra Oral Examination:',
    content: ['Tenderness around molar', 'Swollen gum']
  },
  {
    id: 'radiographic',
    title: 'Radiographic Findings:',
    content: ['X-ray planned to confirm extent of infection']
  },
  {
    id: 'diagnoses',
    title: 'Diagnoses:',
    content: ['Suspected tooth abscess']
  },
  {
    id: 'treatment',
    title: 'Treatment:',
    content: []
  }
];

function App() {


  return (
    <>
      <TopBar>
        <TopBarLogo>
          Othisis Medtech
        </TopBarLogo>
      </TopBar>
      <div style={{ marginTop: '48px', height: 'calc(100vh - 48px)' }}>
          <AppContainer>
            <Sidebar>
              <Header>
                <Logo>Template</Logo>
              </Header>
              <TemplateList />
            </Sidebar>
            <MainContent className="main-content">
              <Header>
                <Title>
                  Root Canal
                  <InfoIcon />
                </Title>
                <ButtonGroup>
                  <Button variant="primary">
                    <FiPlay />
                    Resume
                  </Button>
                  <Button>
                    <FiShare2 />
                  </Button>
                  <Button variant="delete">
                    <FiTrash2 />
                  </Button>
                </ButtonGroup>
              </Header>
              <RootCanalForm  />
            </MainContent>
          </AppContainer>
      </div>
    </>
  );
}

export default App;
