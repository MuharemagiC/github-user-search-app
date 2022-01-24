import React from 'react';
import IconCompany from '../../assets/icons/IconCompany';
import IconTwitter from '../../assets/icons/IconTwitter';
import IconWebsite from '../../assets/icons/IconWebsite';
import IconLocation from '../../assets/icons/IconLocation';
import { theme, colors } from '../../constants/globals';
import {
  MainCard,
  Text,
  Paragraph,
  ReposText,
  ReposWrapper,
  Link,
  Image,
  WrapperUserName,
  WrapperHeader,
} from '../../helpers/MainCardComponentHelper';
import {
  MainCardComponentProps,
  getUserBio,
  formatDate,
  getColor,
} from './helper';

const MainCardComponent: React.FC<MainCardComponentProps> = ({
  themeName,
  user,
}): JSX.Element => {
  return (
    <MainCard themeName={themeName}>
      <div
        style={{
          display: 'flex',
          margin: '0 24px',
          marginTop: '33px',
        }}
      >
        <Image src={user.avatarUrl} alt="avatar" />
        <WrapperHeader>
          <WrapperUserName>
            <Text fontSize="16px" themeName={themeName}>
              {user.login}
            </Text>
            <Link href={user.htmlUrl} target="_blank" rel="noreferrer">
              @{user.login}
            </Link>
          </WrapperUserName>
          <Paragraph
            themeName={themeName}
            color={colors.DATE_BLUE}
            lineHeight="19px"
            style={{ marginTop: '7px' }}
          >
            {formatDate(user.createdAt)}
          </Paragraph>
        </WrapperHeader>
      </div>
      <div style={{ margin: '0 24px', marginTop: '33px' }}>
        <Paragraph
          themeName={themeName}
          color={colors.LIGHT_BLUE}
          lineHeight="25px"
        >
          {getUserBio(user.bio)}
        </Paragraph>
      </div>
      <ReposWrapper themeName={themeName}>
        <div>
          <ReposText
            themeName={themeName}
            fontSize="11px"
            color={colors.LIGHT_BLUE}
          >
            Repos
          </ReposText>
          <ReposText
            themeName={themeName}
            fontSize="16px"
            color={colors.DARK}
            style={{ textAlign: 'center' }}
          >
            {user.publicRepos}
          </ReposText>
        </div>
        <div>
          <ReposText
            themeName={themeName}
            fontSize="11px"
            color={colors.LIGHT_BLUE}
          >
            Followers
          </ReposText>
          <ReposText
            themeName={themeName}
            fontSize="16px"
            color={colors.DARK}
            style={{ textAlign: 'center' }}
          >
            {user.followers}
          </ReposText>
        </div>
        <div>
          <ReposText
            themeName={themeName}
            fontSize="11px"
            color={colors.LIGHT_BLUE}
          >
            Following
          </ReposText>
          <ReposText
            themeName={themeName}
            fontSize="16px"
            color={colors.DARK}
            style={{ textAlign: 'center' }}
          >
            {user.following}
          </ReposText>
        </div>
      </ReposWrapper>
      <WrapperHeader
        style={{ margin: '0 24px', marginTop: '24px', marginBottom: '24px' }}
      >
        <WrapperUserName>
          <div
            style={{
              display: 'flex',
              marginTop: '16px',
            }}
          >
            <IconLocation
              color={
                themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE
              }
            />
            <ReposText
              themeName={themeName}
              fontSize="13px"
              color={colors.LIGHT_BLUE}
            >
              {!user.location ? 'Not Available' : user.location}
            </ReposText>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '16px',
            }}
          >
            <IconWebsite
              color={
                themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE
              }
            />
            <ReposText
              themeName={themeName}
              fontSize="13px"
              color={colors.LIGHT_BLUE}
            >
              <Link
                href=" https://www.github.blog"
                target="_blank"
                rel="noreferrer"
              >
                https://www.github.blog
              </Link>
            </ReposText>
          </div>
        </WrapperUserName>
        <WrapperUserName>
          <div
            style={{
              display: 'flex',
              marginTop: '16px',
            }}
          >
            <IconTwitter color={getColor(user.twitterUsername, themeName)} />
            <ReposText
              themeName={themeName}
              fontSize="13px"
              color={colors.LIGHT_BLUE}
            >
              {!user.twitterUsername ? 'Not Available' : user.twitterUsername}
            </ReposText>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '16px',
            }}
          >
            <IconCompany
              color={
                themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE
              }
            />

            <ReposText
              themeName={themeName}
              fontSize="13px"
              color={colors.LIGHT_BLUE}
            >
              <Link href={user.htmlUrl} target="_blank" rel="noreferrer">
                @{user.login}
              </Link>
            </ReposText>
          </div>
        </WrapperUserName>
      </WrapperHeader>
    </MainCard>
  );
};

export default MainCardComponent;
