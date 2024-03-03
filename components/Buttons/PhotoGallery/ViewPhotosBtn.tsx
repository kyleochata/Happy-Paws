import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles as styles } from '../../../utils/constants';

type ViewPhotosBtnProps = {
  value: string;
};

const ViewPhotosBtn = ({ value }: ViewPhotosBtnProps) => {
  const navigation = useNavigation<any>()
  
  return (
    <TouchableOpacity
      style={styles.viewPhotosBtn}
      onPress={() => {
        navigation.navigate('Services')
      }}
    >
      <Text style={styles.photosBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  );
};

export default ViewPhotosBtn;