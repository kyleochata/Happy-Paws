import React from 'react'
import { Platform, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookAService from '../components/BookAService'
import styles from '../utils/constants'

const ServicesScreen = () => {
  const navigation = useNavigation<any>()
  const data = [{ id: 'header' }, { id: 'special' }]
  const renderItem = ({ item }: any) => {
    switch (item.id) {
      case 'header':
        return <Header />
      case 'special':
        return (
          <Text style={{ backgroundColor: 'pink', width: '100%' }}>
            Special
          </Text>
        )
      default:
        return null
    }
  }
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
