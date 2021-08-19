import React, { FC } from 'react';

import SlideIMG from '../../assets/hero.png';
import { View } from '../../elements';

const SlideImg: FC = () => (
  <View>
    <img src={SlideIMG} alt="Imagem do SLide" />
  </View>
);

export default SlideImg;
