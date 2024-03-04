import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles as styles } from '../../utils/constants';

type SubmitButtonProps = {
  value: string;
  onPress: React.Dispatch<React.SetStateAction<string>>;
};

const SubmitButton = ({ value }: SubmitButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.bookBtnDark}
    >
      <Text style={styles.bookBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;