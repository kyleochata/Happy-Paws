import React from 'react';
import { View, Text, Button, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import About from '../components/About';
import ValueBanner from '../components/Banner/ValuesBanner';
import Container from '../components/Container';
import Footer from '../components/Footer';
import HServices from '../components/HServices';
import Hero from '../components/Hero/Hero';
import BookAService from '../components/BookAService';
import styles from '../utils/constants';

const ServicesScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <ScrollView
      contentContainerStyle={
        Platform.OS === 'web' ? styles.webHomeView : styles.mobileHomeView
      }
      scrollEnabled={true}
    >
      <Header />
      <Container>
        <Hero />
      </Container>
      <ValueBanner />
      <Container>
        <About />
        <HServices />

      </Container>
        <BookAService />
      <Footer />
    </ScrollView>
  );
};

export default ServicesScreen;