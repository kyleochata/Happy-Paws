import { StyleSheet } from 'react-native';
import { Montserrat } from '../../utils/fonts';
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
  mobInput: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 420,
    height: 43,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  mobTextArea: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 207,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  mobSubmitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  mobImg: {
    marginTop: 40,
    width: '100%',
    height: 288,
    resizeMode: 'contain',
  },

  webWrapper: {
    width: '100%',
    minWidth: '100%',
    marginTop: 94,
    marginBottom: 22,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightPurple,
  },
  webH1: {
    marginTop: 33,
    marginBottom: 33,
    color: colors.darkPurple,
    fontSize: 50,
    fontFamily: 'Montserrat-SemiBold',
  },
  webH2: {
    color: colors.black,
    fontSize: 36,
    fontFamily: 'Montserrat-Medium',
  },
  webFormWrap: {
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    marginBottom: 5,
  },
  webInput: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  webTextArea: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 274,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },
  webSubmitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 33,
  },
  webImg: {
    width: '100%',
    maxWidth: 650,
    height: 500,
    resizeMode: 'contain',
  },
});

export default styles;