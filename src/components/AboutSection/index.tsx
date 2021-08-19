import styled from '@emotion/styled';
import React, { FC } from 'react';
import { color, compose, space, typography } from 'styled-system';

import { LightTheme } from '../../design-system';
import { FlexView, TEXT, View } from '../../elements';
import Skil from './skil.component';

const Title = styled.h1(compose(space, typography, color));

const AboutSection: FC = () => {
  return (
    <View textAlign="center" width="80%" margin="5rem auto">
      <Title margin="4rem 0px 1.5rem">About Me</Title>
      <TEXT
        width="60%"
        margin="auto"
        mb="2rem"
        color={LightTheme.colors.neutral400}
      >
        Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus,
        nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
        quis leo.
      </TEXT>
      <FlexView display="flex" width="80%" alignItems="center" margin="auto">
        <View width="50%" textAlign="left" padding="0px 40px 0px 0px">
          <TEXT fontWeight="bold">Hi There! Im Mark Parker </TEXT>
          <TEXT color={LightTheme.colors.neutral400}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </TEXT>
        </View>

        <View width="50%" padding="0px 0px 0px 40px">
          <Skil course="HTML" percent="80%"></Skil>
          <Skil course="CSS" percent="60%"></Skil>
          <Skil course="Photoshop" percent="50%"></Skil>
          <Skil course="Sketch" percent="90%"></Skil>
        </View>
      </FlexView>
    </View>
  );
};

export default AboutSection;
