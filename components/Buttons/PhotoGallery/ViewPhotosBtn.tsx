import { Platform, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { buttonStyles as styles } from '../../../utils/constants';

type ViewPhotosBtnProps = {
  value: string;
};

const ViewPhotosBtn = ({ value }: ViewPhotosBtnProps) => {
  const mobile = Platform.OS !== 'web';
  const navigation = useNavigation<any>()
  
  return (
    <TouchableOpacity
      style={mobile ? styles.mobileViewPhotosBtn : styles.webViewPhotosBtn}
      onPress={() => {
        navigation.navigate('Services')
      }}
    >
      <Text style={mobile ? styles.mobilePhotosBtnLTxt : styles.webPhotosBtnLTxt}>{value}</Text>
    </TouchableOpacity>
  );
};

export default ViewPhotosBtn;