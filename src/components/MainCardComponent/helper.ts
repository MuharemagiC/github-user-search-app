import { theme, colors } from '../../constants/globals';

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

export interface MainCardComponentProps {
  themeName: string;
  user: GithubUser;
}

export const getUserBio = (userBio: string): string => {
  return !userBio
    ? 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'
    : userBio;
};

export const formatDate = (date: string): string => {
  const d = new window.Date(date);
  const monthNames: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const day = d.getDate();

  const monthIndex = d.getMonth();
  const monthName = monthNames[monthIndex];

  const year = d.getFullYear();

  return `Joined ${day} ${monthName} ${year}`;
};

export const getColor = (
  twitterUsername: string,
  themeName: string
): string => {
  if (!twitterUsername) return 'gray';
  if (themeName === theme.DARK) return colors.WHITE;

  return colors.LIGHT_BLUE;
};
