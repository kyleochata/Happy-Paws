// export default HomeScreen
import React from 'react'
import { ScrollView, Platform, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer'
import styles from '../utils/constants'

const HomeScreen = () => {
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
      <Footer />
    </ScrollView>
  )
}

export default HomeScreen
