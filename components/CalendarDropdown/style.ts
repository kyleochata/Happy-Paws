import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';
import { FiraSans } from '../../utils/fonts';

const styles = StyleSheet.create({
  calendar: {
    width: 'auto',
    backgroundColor: colors.lavender,
    height: 44,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarIcon: {
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 10,
  },
  date: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: colors.black,
    paddingTop: 8,
    paddingRight: 10,
    paddingBottom: 8,
    paddingLeft: 10,
  },
  calendarDropdown: {
    zIndex: 99,
    width: 339,
    height: 375,
    borderRadius: 10,
    fontFamily: FiraSans,
    fontSize: 26,
    position: 'absolute',
    marginTop: 10,
    top: 0,
    left: 0,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;