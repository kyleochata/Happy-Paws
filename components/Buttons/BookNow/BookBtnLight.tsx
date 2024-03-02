import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { buttonStyles as styles, colors } from '../../../utils/constants'

type BookBtnLightProps = {
  value: string;
}

const BookBtnLight = ({ value }: BookBtnLightProps) => {
  const navigation = useNavigation<any>()
  return (
    <TouchableOpacity
      style={styles.bookBtnLight}
      onPress={() => {
        navigation.navigate('Services')
      }}
    >
      <Text style={styles.bookBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  )
}
export default BookBtnLight
