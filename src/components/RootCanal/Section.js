import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
`;

const SectionContent = styled.div`
  background: white;
  border-radius: 6px;
  padding: 12px 16px;
  min-height: 48px;
`;

const BulletPoint = styled.li`
  margin-bottom: 8px;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  
  &:last-child {
    margin-bottom: 0;
  }

  &::marker {
    color: #666;
    font-size: 14px;
  }
`;

const Section = ({ title, content }) => {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          {content.map((item, index) => (
            <BulletPoint key={`${title}-${index}`}>{item}</BulletPoint>
          ))}
        </ul>
      </SectionContent>
    </SectionContainer>
  );
};

export default Section; 