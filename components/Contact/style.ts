import { StyleSheet } from 'react-native';
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
    marginBottom: 14,
  },
  mobileContactH2: {
    color: colors.darkPurple,
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginBottom: 62,
  },
  mobileContactUs: {
    color: colors.darkPurple,
    fontSize: 36,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: 15,
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
  mobileContactImg: {
    marginTop: 40,
    width: '100%',
    height: 288,
    resizeMode: 'contain',
  },

  webContactH1: {
    marginTop: 44,
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
    marginBottom: 96,
  },
  webContactForm: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  webContactImg: {
    width: '100%',
    maxWidth: 650,
    height: 500,
    resizeMode: 'contain',
  },
});

export default styles;