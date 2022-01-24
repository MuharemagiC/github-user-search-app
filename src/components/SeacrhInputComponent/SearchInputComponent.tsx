import React from 'react';
import styled from 'styled-components';

import IconSearch from '../../assets/icons/IconSearch';
import { theme, colors } from '../../constants/globals';
import SearchInputComponentStyle from './SearchInputComponentStyle.module.css';

interface SearchInputComponentProps {
  themeName: string;
  inputValue: string;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
  error: string;
}

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${(props: { themeName: string }) =>
    props.themeName === theme.DARK ? colors.DARK_BLUE : colors.WHITE};
  border-radius: 15px;
  justify-content: center;
  height: 60px;
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  height: 46px;
  width: 100%;
  margin-left: 5px;
  outline: none;
  color: ${(props: { themeName: string }) =>
    props.themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE};
  ::placeholder {
    color: ${(props: { themeName: string }) =>
      props.themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE};
    font-family: 'Space Mono', monospace;
    font-size: 12px;
  }
  @media (max-width: 320px) {
    ::placeholder {
      font-size: 9.5px;
    }
  }
`;

const SearchInputComponent: React.FC<SearchInputComponentProps> = ({
  themeName,
  handleSubmit,
  handleChange,
  inputValue,
  error,
}): JSX.Element => {
  const getErrorMessage = (): string => (error === 'Success' ? '' : error);

  return (
    <>
      <SearchForm themeName={themeName} onSubmit={handleSubmit}>
        <div
          style={{ marginLeft: '10px', alignSelf: 'center', marginTop: '5px' }}
        >
          <IconSearch />
        </div>
        <SearchInput
          themeName={themeName}
          type="text"
          autoFocus
          value={inputValue}
          onChange={handleChange}
          placeholder="Search GitHub username..."
        />
        {getErrorMessage() !== '' && (
          <span
            style={{
              color: 'red',
              fontSize: '10px',
              width: '100%',
              textAlign: 'right',
              marginRight: '5px',
            }}
          >
            {getErrorMessage()}
          </span>
        )}
        <button
          type="submit"
          className={SearchInputComponentStyle.SubmitButton}
        >
          Search
        </button>
      </SearchForm>
    </>
  );
};

export default SearchInputComponent;
