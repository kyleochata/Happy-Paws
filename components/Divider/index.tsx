import { View } from 'react-native';
import { colors } from '../../utils/constants';

const Divider = () => {

  return <View style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 1,
    width: '100%',
    backgroundColor: colors.grey
  }} />;
};

export default Divider;