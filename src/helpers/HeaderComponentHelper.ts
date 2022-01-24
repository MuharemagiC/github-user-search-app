import styled from 'styled-components';
import { theme, colors } from '../constants/globals';

export const HeaderTitle = styled.div`
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  font-size: 26px;
  line-height: 39px;
  color: ${(props: { themeName: string }) =>
    props.themeName === theme.DARK ? colors.WHITE : colors.DARK};
`;

export const ThemeText = styled.span`
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: 2.5px;
  color: ${(props: { themeName: string }) =>
    props.themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE};
`;
