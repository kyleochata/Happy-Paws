import { View, Text, TouchableOpacity } from 'react-native';
import { buttonStyles as styles } from '../../utils/constants';

type SubmitButtonProps = {
  value: string;
};

const SubmitButton = ({ value }: SubmitButtonProps) => {

  return (
    <View style={styles.bookBtnDark}>
      <Text style={styles.bookBtnLTxt}>{value}</Text>
    </View>
  );
};

export default SubmitButton;