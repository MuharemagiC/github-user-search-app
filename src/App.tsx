import React, { useEffect, useState } from 'react';
import AppStyle from './AppStyle.module.css';
import SearchInputComponent from './components/SeacrhInputComponent/SearchInputComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import MainCardComponent from './components/MainCardComponent/MainCardComponent';
import { theme, colors } from './constants/globals';

interface GithubUser {
  avatarUrl: string;
  htmlUrl: string;
  followers: number;
  following: number;
  publicRepos: number;
  createdAt: string;
  login: string;
  bio: string;
  location: string;
  twitterUsername: string;
}

const App: React.FC = () => {
  const usr: GithubUser = {
    avatarUrl: '',
    htmlUrl: '',
    followers: 0,
    following: 0,
    publicRepos: 0,
    createdAt: '',
    login: '',
    bio: '',
    location: '',
    twitterUsername: '',
  };
  const [themeName, setThemeName] = useState(theme.DARK);
  const [inputValue, setInputValue] = useState('');
  const [user, setUser] = useState(usr);
  const [error, setError] = useState('');

  const changeThemeHandler = (): void => {
    setThemeName(themeName === theme.DARK ? theme.LIGHT : theme.DARK);
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(`https://api.github.com/users/octocat`);
        if (response.status === 200) {
          const {
            avatar_url: avatarUrl,
            html_url: htmlUrl,
            followers,
            following,
            public_repos: publicRepos,
            created_at: createdAt,
            login,
            bio,
            location,
            twitter_username: twitterUsername,
          } = await response.json();
          const githubUser = {
            avatarUrl,
            htmlUrl,
            followers,
            following,
            publicRepos,
            createdAt,
            login,
            bio,
            location,
            twitterUsername,
          };
          setUser(githubUser);
          setError('Success');
          setInputValue('');
        } else setError('No results');
      } catch (err) {
        setError('No results');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor =
      themeName === theme.LIGHT
        ? colors.BACKGROUND_LIGHT
        : colors.BACKGROUND_DARK;
  }, [themeName]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
    if (newValue === '') setError('');
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.github.com/users/${inputValue}`
      );
      if (response.status === 200) {
        const {
          avatar_url: avatarUrl,
          html_url: htmlUrl,
          followers,
          following,
          public_repos: publicRepos,
          created_at: createdAt,
          login,
          bio,
          location,
          twitter_username: twitterUsername,
        } = await response.json();
        const githubUser = {
          avatarUrl,
          htmlUrl,
          followers,
          following,
          publicRepos,
          createdAt,
          login,
          bio,
          location,
          twitterUsername,
        };
        setUser(githubUser);
        setError('Success');
        setInputValue('');
      } else setError('No results');
    } catch (err) {
      setError('No results');
    }
  };

  return (
    <div className={AppStyle.AppContainer}>
      <HeaderComponent
        themeName={themeName}
        changeThemeHandler={changeThemeHandler}
      />
      <SearchInputComponent
        themeName={themeName}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        inputValue={inputValue}
        error={error}
      />
      <MainCardComponent themeName={themeName} user={user} />
    </div>
  );
};

export default App;
