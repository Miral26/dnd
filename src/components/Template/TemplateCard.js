import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 12px 16px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
  box-shadow: none;
  cursor: grab;
  user-select: none;
  font-size: 14px;
  color: #1a1a1a;
  border: 1px solid #eaeaea;

  &:hover {
    background: #f8f8f8;
  }

  &:active {
    cursor: grabbing;
  }
`;

const TemplateCard = ({ title }) => {
  return (
    <Card>
      {title}
    </Card>
  );
};

export default TemplateCard;
