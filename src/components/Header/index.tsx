import React, { FC } from 'react';

import { LightTheme } from '../../design-system';
import { FlexView } from '../../elements';
import { Logo } from '..';
import { Header, LI, UL } from './header.style';

const HeaderPricipal: FC = () => {
  return (
    <Header bg="#ddd" p="20px 0px">
      <FlexView
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="80%"
        margin="auto"
      >
        <Logo />
        <UL display="flex" gridColumnGap={15} color={LightTheme.colors.accent}>
          <LI>HOME</LI>
          <LI>ABOUT</LI>
          <LI>SERVCES</LI>
          <LI>PORTFOLIO</LI>
          <LI>BLOG</LI>
          <LI>CONTACT</LI>
        </UL>
      </FlexView>
    </Header>
  );
};

export default HeaderPricipal;
