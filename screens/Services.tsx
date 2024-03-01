import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ServicesScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Services Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default ServicesScreen
