import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/constants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 15,
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
  webRadioLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 26,
    color: colors.black,
  },
  mobRadioLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: colors.black,
  },
  webFormLabel: {
    color: colors.black,
    fontSize: 26,
    fontFamily: 'Montserrat-Medium',
  },
  mobFormLabel: {
    color: colors.black,
    fontSize: 26,
    fontFamily: 'Montserrat-Medium',
  },
});

export default styles;