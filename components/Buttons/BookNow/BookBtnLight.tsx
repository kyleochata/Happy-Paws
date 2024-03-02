import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { buttonStyles as styles, colors } from '../../../utils/constants'
const BookBtnLight = () => {
  const navigation = useNavigation<any>()
  return (
    <TouchableOpacity
      style={styles.bookBtnLight}
      onPress={() => {
        navigation.navigate('Services')
      }}
    >
      <Text style={styles.bookBtnLTxt}>Book Now</Text>
    </TouchableOpacity>
  )
}
export default BookBtnLight
