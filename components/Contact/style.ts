import { StyleSheet } from 'react-native';
import { Montserrat } from '../../utils/fonts';
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  mobileContactWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mobileContactH1: {
    color: colors.darkPurple,
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  mobileContactH2: {
    color: colors.darkPurple,
    fontSize: 22,
    fontFamily: Montserrat,
    textAlign: 'center'
  },
  mobileContactUs: {
    color: colors.darkPurple,
    fontSize: 22,
    fontFamily: Montserrat,
    textAlign: 'center'
  },
  mobileContactFormWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  mobileContactForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  contactFormLabel: {
    color: colors.black,
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
  },
  contactInput: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
  },
  contactTextArea: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 274,
    paddingLeft: 15,
    paddingRight: 15,
  },
  mobileContactImg: {
    width: '100%',
    maxWidth: 360,
    height: 330,
    resizeMode: 'contain',
  },

  webContactH1: {
    marginBottom: 20,
    color: colors.darkPurple,
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
  },
  webContactH2: {
    color: colors.darkPurple,
    fontSize: 36,
    fontFamily: 'Montserrat-Medium',
  },
  webContactUs: {
    color: colors.darkPurple,
    fontSize: 50,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    paddingBottom: 33,
  },
  webContactWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  webContactFormWrap: {
    width: '100%',
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
  },
  webContactForm: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  submitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 33,
  },
  webContactImg: {
    width: '100%',
    maxWidth: 650,
    height: 500,
    resizeMode: 'contain',
  },
});

export default styles;