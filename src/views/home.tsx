import React, { FC } from 'react';

import { Layout } from '../components';
import AboutSection from '../components/AboutSection';
import HeaderPricipal from '../components/Header';
import HeaderSlide from '../components/HeaderSlide';
import MyServicesSection from '../components/MyServicesSection';
import { View } from '../elements';

const Home: FC = () => (
  <Layout pageTitle="Home">
    <View>
      <HeaderPricipal />
      <HeaderSlide />
      <AboutSection />
      <MyServicesSection />
    </View>
  </Layout>
);

export default Home;
