// FontLoading.js

import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

// Define the font family names
export const Montserrat = 'Montserrat'
export const FiraSans = 'FiraSans'

// Load custom fonts asynchronously
export const useFontLoading = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        [Montserrat]: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
        'Montserrat-SemiBold': require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
        [FiraSans]: require('../assets/fonts/FiraSans/FiraSans-Regular.ttf'),
        'FiraSans-Bold': require('../assets/fonts/FiraSans/FiraSans-Bold.ttf'),
        'FiraSans-Medium': require('../assets/fonts/FiraSans/FiraSans-Medium.ttf'),
      })
      setFontsLoaded(true)
    }

    loadFonts()
  }, [])

  return fontsLoaded
}
