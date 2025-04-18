import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: ${props => props.size === 'large' ? '10px 16px' : '8px 16px'};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  background-color: ${props => {
    if (props.variant === 'primary') return '#fff';
    if (props.variant === 'delete') return '#fff';
    return '#f8f8f8';
  }};
  color: ${props => {
    if (props.variant === 'primary') return '#1a1a1a';
    if (props.variant === 'delete') return '#1a1a1a';
    return '#1a1a1a';
  }};
  border: ${props => {
    if (props.variant === 'primary') return '1px solid #eaeaea';
    return 'none';
  }};
  
  &:hover {
    background-color: ${props => {
      if (props.variant === 'primary') return '#f8f8f8';
      if (props.variant === 'delete') return '#fee';
      return '#eee';
    }};
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Button = ({ children, variant, size, icon, ...props }) => {
  return (
    <StyledButton variant={variant} size={size} {...props}>
      {icon}
      {children}
    </StyledButton>
  );
};

export default Button; 