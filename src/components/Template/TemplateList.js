import React, { useState } from 'react';
import styled from 'styled-components';
import TemplateCard from './TemplateCard';
import SearchBar from '../common/SearchBar';
import Button from '../common/Button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 140px);
`;

const TemplateContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 3px;
  }
`;

const EditButton = styled(Button)`
  width: 100%;
  padding: 12px;
  background: #1a1a1a;
  color: white;
  border: none;
  margin-top: 16px;

  &:hover {
    background: #333;
  }
`;

const templateItems = [
  { id: 'subjective', title: 'Subjective' },
  { id: 'objective', title: 'Objective' },
  { id: 'assessment', title: 'Assessment & Plan' },
  { id: 'findings', title: 'Findings' },
  { id: 'diagnoses', title: 'Diagnoses' },
  { id: 'treatment', title: 'Treatment' },
  { id: 'recovery', title: 'Recovery' },
  { id: 'objective2', title: 'Objective' },
  { id: 'assessment2', title: 'Assessment & Plan' },
  { id: 'treatment2', title: 'Treatment' },
];

const TemplateList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredItems = templateItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <SearchBar
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <TemplateContainer>
        {filteredItems.map((item) => (
          <TemplateCard key={item.id} title={item.title} />
        ))}
      </TemplateContainer>
      <EditButton>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
        Edit
      </EditButton>
    </Container>
  );
};

export default TemplateList; 