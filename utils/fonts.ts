import * as Font from 'expo-font'

// Define the font family name
export const Montserrat = 'Montserrat'

// Load custom font synchronously
export const loadCustomFont = async () => {
  await Font.loadAsync({
    [Montserrat]: require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    // You can add more custom fonts here if needed
  })
}

// Load custom font when the app starts
loadCustomFont()
