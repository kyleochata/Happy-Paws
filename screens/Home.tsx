import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'

const HomeScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <View>
      <Container>
        <Text>Home Screen</Text>
        <Button
          title="Go to Services"
          onPress={() => navigation.navigate('Services')}
          />
        <Text>Home Screen</Text>
        <Button
          title="Go to Services"
          onPress={() => navigation.navigate('Services')}
        />
      </Container>
    </View>
  )
}

export default HomeScreen
