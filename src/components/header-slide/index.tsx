import React, { FC } from 'react';

import { LightTheme } from '../../design-system';
import { Button, FlexView, Text, View } from '../../elements';
import SlideImg from '../slide-img';

const HeaderSlide: FC = () => (
  <View bg="#ddd">
    <FlexView
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="80%"
      margin="auto"
    >
      <View>
        <Text color="accent" fontSize={30} fontWeight={500}>
          HELLO, I’M
        </Text>
        <Text fontSize={70} my="0.625rem" mx="0">
          MARK PARKER
        </Text>
        <Text mb="5rem" color={LightTheme.colors.neutral400}>
          A Freelance UI Designer & Web Developer{' '}
        </Text>

        <Button variant="secondary">
          <Text fontSize={15}>VIEW MY WORK</Text>
        </Button>
      </View>
      <SlideImg />
    </FlexView>
  </View>
);

export default HeaderSlide;
