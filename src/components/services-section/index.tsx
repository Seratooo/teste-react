import React, { FC } from 'react';

import { LightTheme } from '../../design-system';
import { FlexView, Text } from '../../elements';
import { GridView } from '../../elements/grid-view';
import { Title } from '../shared/titles';
import CardElement from './card';

const ServicesSection: FC = () => {
  return (
    <FlexView
      textAlign="center"
      width="80%"
      margin="5rem auto"
      display="flex"
      flexDirection="column"
    >
      <Title margin="1.5rem 0px">My Services</Title>
      <Text
        width="60%"
        margin="auto"
        mb="2rem"
        color={LightTheme.colors.neutral400}
      >
        Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus,
        nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis
        quis leo.
      </Text>

      <GridView
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

export default ServicesSection;
