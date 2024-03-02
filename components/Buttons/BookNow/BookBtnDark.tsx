import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles as styles } from '../../../utils/constants';

type BookBtnDarkProps = {
  value: string;
}

const BookBtnDark = ({ value }: BookBtnDarkProps) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.bookBtnDark}
      onPress={() => {
        navigation.navigate('Services')
      }}
    >
      <Text style={styles.bookBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  )
}
export default BookBtnDark
