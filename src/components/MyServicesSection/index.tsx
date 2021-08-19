import styled from '@emotion/styled';
import React, { FC } from 'react';
import {
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  space,
  typography,
} from 'styled-system';

import { LightTheme } from '../../design-system';
import { FlexView, TEXT } from '../../elements';
import CardElement from './card';

const Title = styled.h1(compose(space, typography, color));
const GridView = styled.div(compose(space, layout, grid, border, flexbox));
const MyServicesSection: FC = () => {
  return (
    <FlexView
      textAlign="center"
      width="80%"
      margin="5rem auto"
      display="flex"
      flexDirection="column"
    >
      <Title margin="1.5rem 0px">My Services</Title>
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

      <GridView
        display="grid"
        gridTemplateColumns="repeat(auto-fit,minmax(300px,3fr))"
        gridGap="10px"
      >
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
        <CardElement />
      </GridView>
    </FlexView>
  );
};

export default MyServicesSection;
