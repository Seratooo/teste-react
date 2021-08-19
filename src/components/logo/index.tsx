import React, { FC } from 'react';

import LogoTipo from '../../assets/logo.png';
import { LogoWrapper } from './logo.styles';

const Logo: FC = () => (
  <LogoWrapper>
    <img src={LogoTipo} alt="Logotipo" />
  </LogoWrapper>
);

export default Logo;
