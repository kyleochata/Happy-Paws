import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import Hero from '../components/Hero/Hero'
import styles from '../utils/constants'
const HomeScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <View style={styles.mainHomeView}>
      <Container>
        <Text>Home Screen</Text>
        <Button
          title="Go to Services"
          onPress={() => navigation.navigate('Services')}
        />
        <Hero />
      </Container>
    </View>
  )
}

export default HomeScreen
