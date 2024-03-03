import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles as styles } from '../../utils/constants';

type BtnDarkProps = {
  value: string;
  onPress: () => void;
};

const BtnDark = ({ value }: BtnDarkProps) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.bookBtnDark}
    >
      <Text style={styles.bookBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  );
};

export default BtnDark;