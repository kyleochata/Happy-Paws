import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles as styles } from '../../../utils/constants';

type ArrowBtnProps = {
  value: string;
};

const ArrowBtn = ({ value }: ArrowBtnProps) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.arrowBtn}
      onPress={() => {
        navigation.navigate('Services')
      }}
    >
      <Text style={styles.photosBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  );
};

export default ArrowBtn;