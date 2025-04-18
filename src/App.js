import React from "react";
import styled from "styled-components";
import RootCanalForm from "./components/RootCanal/RootCanalForm";
import Sidebar from "./components/common/Sidebar";
import { FiPlay, FiShare2, FiTrash2, FiInfo } from "react-icons/fi";
import "./App.css";
import Header from "./components/common/Header";

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f5f5f5;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 24px;
  background-color: #fff;
  overflow-y: auto;
`;

const SectionHeader = styled.div`
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
  background-color: ${(props) =>
    props.variant === "primary"
      ? "#fff"
      : props.variant === "delete"
      ? "#fff"
      : "#f8f8f8"};
  color: ${(props) =>
    props.variant === "primary"
      ? "#1a1a1a"
      : props.variant === "delete"
      ? "#1a1a1a"
      : "#1a1a1a"};
  border: ${(props) =>
    props.variant === "primary" ? "1px solid #eaeaea" : "none"};

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#f8f8f8"
        : props.variant === "delete"
        ? "#fee"
        : "#eee"};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const App = () => {
  return (
    <div>
      <Header />
      <div style={{ marginTop: "64px", height: "calc(100vh - 64px)" }}>
        <AppContainer>
          <Sidebar />
          <MainContent>
            <SectionHeader>
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
            </SectionHeader>
            <RootCanalForm />
          </MainContent>
        </AppContainer>
      </div>
    </div>
  );
};

export default App;
