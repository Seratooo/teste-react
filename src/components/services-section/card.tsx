import React, { FC } from 'react';

import LogoCard from '../../assets/cardLogo.png';
import { Text, View } from '../../elements';
import { SubTitle } from '../shared/titles';
import { ViewCard } from './services-section.styles';

const CardElement: FC = () => (
  <ViewCard
    padding="20px"
    border="1px solid #ddd"
    borderRadius="5px"
    color="#212121"
    boxShadow=" 1px 1px 5px rgba(0,0,0,0.4)"
    transition=".5s"
  >
    <View>
      <img src={LogoCard} alt="CardLogo" width="25%" />
    </View>
    <SubTitle m="13px 0px">Web Design</SubTitle>
    <Text>
      Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus quis
      blandit enimdicta sunt.
    </Text>
  </ViewCard>
);

export default CardElement;
