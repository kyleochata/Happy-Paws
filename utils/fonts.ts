// FontLoading.js

import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

// Define the font family names
export const Montserrat = 'Montserrat'
export const MontserratBold = 'MontserratBold'
export const FiraSans = 'FiraSans'
export const FiraSansBold = 'FiraSansBold'

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
        [MontserratBold]: require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
        [FiraSansBold]: require('../assets/fonts/FiraSans/static/FiraSans-Bold.ttf'),
      })
      setFontsLoaded(true)
    }

    loadFonts()
  }, [])

  return fontsLoaded
}
