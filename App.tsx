import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView, Platform } from 'react-native'
import { useFontLoading } from './utils/fonts' // Import the custom font loading hook
import AppNavigator from './navigation/AppNavigator'

const App = () => {
  const fontsLoaded = useFontLoading() // Use the custom font loading hook

  if (!fontsLoaded) {
    return null // Render nothing until fonts are loaded
  }
  const changeBodyFlow = () => {
    if (Platform.OS === 'web') {
      document.body.style.overflow = 'auto'
    } else {
      return
    }
  }
  changeBodyFlow()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App
