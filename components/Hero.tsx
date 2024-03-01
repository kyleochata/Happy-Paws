import { View, Text, Image } from 'react-native'
const Hero = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../assets/images/hero.jpg')}
        style={{ width: '100%', height: 306 }}
      />
      <Text>Welcome to our app!</Text>
    </View>
  )
}
export default Hero
