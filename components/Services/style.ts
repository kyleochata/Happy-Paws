import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';
import { FiraSans } from '../../utils/fonts';

const styles = StyleSheet.create({
  mobWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  mobServicesForPetWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobH1: {
    color: colors.white,
    fontSize: 36,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    marginBottom: 14,
  },
  mobLabel: {
    color: colors.darkPurple,
    fontSize: 22,
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    marginBottom: 15,
  },
  mobServices: {
    width: '100%',
    maxWidth: 598,
    marginBottom: 10,
  },
  mobH3: {
    color: colors.black,
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 10,
  },
  mobDescription: {
    color: colors.black,
    fontSize: 22,
    fontFamily: FiraSans,
  },
  mobCard: {
    width: '100%',
    height: 'auto',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gap: 10,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 25,
  },
  mobImage: {
    width: '100%',
    maxWidth: 600,
    height: 438,
  },
  mobButton: {
    flexGrow: 2
  },

  webWrapper: {
    width: '100%',
    marginTop: 43,
    paddingBottom: 133,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightPurple,
  },
  webH1: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 43,
    marginBottom: 15,
    color: colors.white,
    fontSize: 50,
    fontFamily: 'Montserrat-SemiBold',
  },
  webServicesForPetWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webCard: {
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 25,
    marginTop: 5,
    marginBottom: 10,
  },
  webLabel: {
    color: colors.black,
    fontSize: 36,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 15,
  },
  webServices: {
    width: '100%',
    maxWidth: 598,
  },
  webH3: {
    color: colors.black,
    fontSize: 28,
    fontFamily: 'Montserrat-Medium',
    marginBottom: 10,
  },
  webDescription: {
    color: colors.black,
    fontSize: 22,
    fontFamily: FiraSans,
    marginBottom: 10,
  },
  webImage: {
    width: 600,
    height: 438,
  },
  webButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 2,
  },
});

export default styles;