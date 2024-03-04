import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  mobWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightPurple,
  },
  mobH1: {
    color: colors.darkPurple,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: 14,
  },
  mobH2: {
    color: colors.darkPurple,
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginBottom: 62,
  },
  mobFormWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  mobForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  mobFormLabel: {
    color: colors.black,
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
    marginBottom: 5,
  },
  mobRadioBtnForm: {
    width: '100%',
    maxWidth: 500,
  },
  mobRadioBtnFormWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
  },
  mobServices: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  mobSubmitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },

  webWrapper: {
    width: '100%',
    minWidth: '100%',
    marginTop: 94,
    paddingBottom: 22,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightPurple,
  },
  webH1: {
    zIndex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
    marginTop: 33,
    marginBottom: 33,
    color: colors.darkPurple,
    fontSize: 50,
    fontFamily: 'Montserrat-SemiBold',
  },
  webH2: {
    color: colors.black,
    fontSize: 26,
    fontFamily: 'Montserrat-Medium',
  },
  webFormWrap: {
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: 40,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: colors.darkPurple,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 100,
    paddingTop: 33,
    paddingRight: 23,
    paddingBottom: 33,
    paddingLeft: 23,
    marginBottom: 96,
  },
  webForm: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  webFormLabel: {
    color: colors.black,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    marginBottom: 5,
  },
  webRadioBtnForm: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
  },
  webRadioBtnFormWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 30,
  },
  webServices: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    marginTop: 10,
    marginBottom: 25,
    paddingLeft: 30,
    paddingRight: 30,
  },
  webSubmitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 33,
  },

  calendar: {
    width: '100%',
    minWidth: '100%',
    height: 44,
    backgroundColor: colors.lavender,
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
    width: 339,
    height: 375,
    position: 'absolute',
    marginTop: 30,
    top: 0,
    left: -200,
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