import React from 'react'
import { Platform, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookAService from '../components/BookAService'
import styles from '../utils/constants'

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
      <BookAService />
      <Footer />
    </ScrollView>
  )
}

export default ServicesScreen
