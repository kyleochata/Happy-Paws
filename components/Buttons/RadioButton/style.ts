import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioOuter: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  radioSelected: {
    borderColor: colors.darkPurple,
  },
  radioInner: {
    height: 10,
    width: 10,
    borderRadius: 6,
    backgroundColor: colors.lightPurple,
  },
  radioLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 22,
    color: colors.black,
  },
});

export default styles;