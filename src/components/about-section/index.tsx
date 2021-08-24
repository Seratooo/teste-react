import styled from '@emotion/styled';
import React, { FC } from 'react';
import { color, compose, space, typography } from 'styled-system';

import { FlexView, Text, View } from '../../elements';
import { SKILLS } from './about-section.data';
import Skill from './skill';

const Title = styled.h1(compose(space, typography, color));

const AboutSection: FC = () => (
  <View textAlign="center" width="80%" margin="5rem auto">
    <Title margin="4rem 0px 1.5rem">About Me</Title>
    <Text width="60%" margin="auto" mb="2rem" color="neutral400">
      Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc
      id efficitur sagittis, urna est ultricies eros, ac porta sem turpis quis
      leo.
    </Text>
    <FlexView display="flex" width="80%" alignItems="center" margin="auto">
      <View width="50%" textAlign="left" pl="2.5rem">
        <Text fontWeight="bold">Hi There! Im Mark Parker </Text>
        <Text color="neutral400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
      </View>

      <View width="50%" pb="2.5rem">
        {SKILLS.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </View>
    </FlexView>
  </View>
);

export default AboutSection;
