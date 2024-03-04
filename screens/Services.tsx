import React from 'react'
import { Platform, View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookAService from '../components/BookAService'
import styles from '../utils/constants'
import Container from '../components/Container'
import SpecialAcc from '../components/SpecialAcc'
import Services from '../components/Services'

const ServicesScreen = () => {
  const navigation = useNavigation<any>()
  const data = [
    { id: 'header' },
    { id: 'services' },
    { id: 'special' },
    { id: 'bookaservice' },
    { id: 'footer' },
  ]

  const renderItem = ({ item }: any) => {
    switch (item.id) {
      case 'header':
        return (
          <View style={styles.stretchCon}>
            <Header />
          </View>
        )
      case 'services':
        return (
          <View style={styles.stretchCon}>
            <Services />
          </View>
        )
      case 'special':
        return (
          <View style={styles.stretchCon}>
            <Container>
              <SpecialAcc />
            </Container>
          </View>
        )
      case 'bookaservice':
        return (
          <View style={styles.stretchCon}>
            <BookAService />
          </View>
        )
      case 'footer':
        return (
          <View style={styles.stretchCon}>
            <Footer />
          </View>
        )
      default:
        return null
    }
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={
        Platform.OS === 'web' ? styles.webHomeView : styles.mobileHomeView
      }
      scrollEnabled={true}
    />
  )
}

export default ServicesScreen
