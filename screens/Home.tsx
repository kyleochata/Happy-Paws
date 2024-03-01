import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Services"
        onPress={() => navigation.navigate('Services')}
      />
    </View>
  )
}

export default HomeScreen
