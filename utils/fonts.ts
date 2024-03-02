// import * as Font from 'expo-font'

// // Define the font family name
// export const Montserrat = 'Montserrat'
// // Load custom font synchronously
// export const loadCustomFont = async () => {
//   await Font.loadAsync({
//     [Montserrat]: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
//     // Add the additional font file here
//     'Montserrat-Bold': require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
//     'Montserrat-Medium': require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
//     'Montserrat-SemiBold': require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
//     'Fira Sans': require('../assets/fonts/FiraSans/FiraSans-Regular.ttf'),
//   })
// }

// // Load custom font when the app starts
// loadCustomFont()
// FontLoading.js

import { useState, useEffect } from 'react'
import * as Font from 'expo-font'

// Define the font family names
export const Montserrat = 'Montserrat'
export const FiraSans = 'Fira Sans'

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
      })
      setFontsLoaded(true)
    }

    loadFonts()
  }, [])

  return fontsLoaded
}
