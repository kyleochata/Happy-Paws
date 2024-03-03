import { View } from 'react-native';
import { colors } from '../../utils/constants';

type DividerProps = {
  orientation: 'horizontal' | 'vertical';
}

const Divider = ({ orientation }: DividerProps) => {

  return (
    orientation === 'horizontal' ? (
      <View style={{
        height: 1,
        width: '100%',
        backgroundColor: colors.grey
      }} />
    ) : (
      <View style={{
        height: '100%',
        width: 1,
        backgroundColor: colors.grey
      }} />
    )
  );
};

export default Divider;