import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles as styles } from '../../utils/constants';

type SubmitButtonProps = {
  value: string;
  onPress: () => void;
};

const SubmitButton = ({ value }: SubmitButtonProps) => {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      style={styles.bookBtnDark}
    >
      <Text style={styles.bookBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;