import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Hero from '../components/Hero'
const HomeScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Services"
        onPress={() => navigation.navigate('Services')}
      />
      <Hero />
    </View>
  )
}

export default HomeScreen
