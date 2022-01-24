import React from 'react';

import { theme, colors } from '../../constants/globals';
import { HeaderTitle, ThemeText } from '../../helpers/HeaderComponentHelper';
import HeaderComponentStyle from './HeaderComponentStyle.module.css';
import IconMoon from '../../assets/icons/IconMoon';
import IconSun from '../../assets/icons/IconSun';
import { HeaderComponentProps } from './helper';

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  themeName,
  changeThemeHandler,
}): JSX.Element => {
  return (
    <div className={HeaderComponentStyle.HeaderContainer}>
      <HeaderTitle themeName={themeName}>devfinder</HeaderTitle>
      <button
        type="button"
        className={HeaderComponentStyle.HeaderButton}
        onClick={changeThemeHandler}
      >
        <ThemeText themeName={themeName} style={{ alignSelf: 'center' }}>
          {themeName === theme.LIGHT ? 'ligth' : 'dark'}
        </ThemeText>
        <div className={HeaderComponentStyle.HeaderButtonIcon}>
          {themeName === theme.LIGHT ? (
            <IconSun
              color={
                themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE
              }
            />
          ) : (
            <IconMoon
              color={
                themeName === theme.DARK ? colors.WHITE : colors.LIGHT_BLUE
              }
            />
          )}
        </div>
      </button>
    </div>
  );
};

export default HeaderComponent;
