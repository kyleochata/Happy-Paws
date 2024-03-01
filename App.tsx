import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
