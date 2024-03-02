import * as Font from 'expo-font'

// Define the font family name
export const Montserrat = 'Montserrat'
export const MontserratBold = 'MontserratBold'
export const FiraSans = 'FiraSans'
export const FiraSansBold = 'FiraSansBold'

// Load custom font synchronously
export const loadCustomFont = async () => {
  await Font.loadAsync({
    [Montserrat]: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    // You can add more custom fonts here if needed
    [MontserratBold]: require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    [FiraSans]: require('../assets/fonts/FiraSans/static/FiraSans-Regular.ttf'),
    [FiraSansBold]: require('../assets/fonts/FiraSans/static/FiraSans-Bold.ttf'),
  })
}

// Load custom font when the app starts
loadCustomFont()
