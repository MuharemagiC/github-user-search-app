import styled from 'styled-components';
import { theme, colors } from '../constants/globals';

export const MainCard = styled.div`
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  width: 100%;
  background: ${(props: { themeName: string }) =>
    props.themeName === theme.DARK ? colors.DARK_BLUE : colors.WHITE};
  border-radius: 15px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-family: 'Space Mono', monospace;
  color: #0079ff;
  font-size: 13px;
`;

export const Text = styled.p`
  font-family: 'Space Mono', monospace;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props: { fontSize: string }) => props.fontSize};
  line-height: 24px;
  color: ${(props: { themeName: string }) =>
    props.themeName === theme.DARK ? colors.WHITE : colors.DARK};
  margin: 3px 0;
`;

export const Paragraph = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: 13px;
  line-height: ${(props: { lineHeight: string }) => props.lineHeight};
  color: ${(props: { themeName: string; color: string }) =>
    props.themeName === theme.DARK ? colors.WHITE : props.color};
  margin: 3px 0;
  text-align: justify;
`;

export const ReposWrapper = styled.div`
  font-family: 'Space Mono', monospace;
  background: ${(props: { themeName: string }) =>
    props.themeName === theme.DARK
      ? colors.RECTANGLE_DARK
      : colors.RECTANGLE_LIGHT};
  margin: 0 24px;
  border-radius: 10px;
  margin-top: 23px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 85px;
`;

export const ReposText = styled.div`
  font-family: 'Space Mono', monospace;
  font-size: ${(props: { fontSize: string }) => props.fontSize};
  color: ${(props: { themeName: string; color: string }) =>
    props.themeName === theme.DARK ? colors.WHITE : props.color};
  margin-left: 10px;
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  width: 70px;
  height: 70px;

  @media (min-width: 560px) {
    width: 117px;
    height: 117px;
  }
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 560px) {
    flex-direction: row;
  }
`;

export const WrapperUserName = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 560px) {
    margin-right: 140px;
  }
  @media (min-width: 690px) {
    margin-right: 240px;
  }
`;
