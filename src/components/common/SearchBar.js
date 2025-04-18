import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 35px;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
  color: #1a1a1a;
  
  &::placeholder {
    color: #666;
  }
  
  &:focus {
    outline: none;
    border-color: #2196f3;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  width: 18px;
  height: 18px;
`;

const SearchBar = ({ value, onChange, placeholder = "Search Templates" }) => {
  return (
    <SearchContainer>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </SearchContainer>
  );
};

export default SearchBar; 