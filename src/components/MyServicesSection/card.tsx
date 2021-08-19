import styled from '@emotion/styled';
import React, { FC } from 'react';
import { color, compose, space, typography } from 'styled-system';

import LogoCard from '../../assets/cardLogo.png';
import { TEXT, View } from '../../elements';

const SubTitle = styled.h2(compose(typography, color, space));
const ViewCard = styled(View)`
  ${{
    boxShadow: ' 1px 1px 5px rgba(0,0,0,0.4)',
    transition: '.5s',
    '&:hover': {
      boxShadow: ' 1px 1px 7px rgba(0,0,0,0.5)',
      color: 'black',
    },
  }}
`;
const CardElement: FC = () => {
  return (
    <ViewCard
      padding="20px"
      border="1px solid #ddd"
      borderRadius="5px"
      color="#212121"
    >
      <View>
        <img src={LogoCard} alt="CardLogo" width="25%" />
      </View>
      <SubTitle m="13px 0px">Web Design</SubTitle>
      <TEXT>
        Curabitur vitae magna felis. Nulla ac libero ornare, vestibulum lacus
        quis blandit enimdicta sunt.
      </TEXT>
    </ViewCard>
  );
};
export default CardElement;
