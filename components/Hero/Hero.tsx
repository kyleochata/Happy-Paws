import { View, Text, Image } from 'react-native'
import styles from '../../utils/constants'
const Hero = () => {
  return (
    <View>
      <Image
        source={require('../../assets/images/hero.jpg')}
        style={styles.heroImg}
      />
      <Text>{`Your Pet's Home Away from Home`}</Text>
    </View>
  )
}
export default Hero
