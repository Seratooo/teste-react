import React, { FC } from 'react';

import {
  AboutSection,
  HeaderSlide,
  Layout,
  MainHeader,
  ServicesSection,
} from '../components';
import { View } from '../elements';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <View>
      <MainHeader />
      <HeaderSlide />
      <AboutSection />
      <ServicesSection />
    </View>
  </Layout>
);

export default Home;
