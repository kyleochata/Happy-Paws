import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer'
import styles from '../utils/constants'

const HomeScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <View style={styles.mainHomeView}>
      <Header />
      <Container>
        <Hero />
        <Button
          title="Go to Services"
          onPress={() => navigation.navigate('Services')}
        />
      </Container>
      <Footer />
    </View>
  )
}

export default HomeScreen