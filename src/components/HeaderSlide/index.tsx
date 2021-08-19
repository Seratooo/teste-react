import React, { FC } from 'react';

import { LightTheme } from '../../design-system';
import { Button, FlexView, TEXT, View } from '../../elements';
import SlideImg from '../SlideImg';

const HeaderSlide: FC = () => {
  return (
    <View bg="#ddd">
      <FlexView
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="80%"
        margin="auto"
      >
        <View>
          <TEXT color={LightTheme.colors.accent} fontSize={30} fontWeight={500}>
            HELLO, I’M
          </TEXT>
          <TEXT fontSize={70} m="10px 0px">
            MARK PARKER
          </TEXT>
          <TEXT mb="5rem" color={LightTheme.colors.neutral400}>
            A Freelance UI Designer & Web Developer{' '}
          </TEXT>

          <Button variant="secondary">
            <TEXT fontSize={15}>VIEW MY WORK</TEXT>
          </Button>
        </View>
        <SlideImg />
      </FlexView>
    </View>
  );
};

export default HeaderSlide;
