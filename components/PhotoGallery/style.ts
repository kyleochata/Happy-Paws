import { StyleSheet } from 'react-native';
import { Montserrat, FiraSans } from '../../utils/fonts'
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  mobileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileIntro: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 84
  },
  mobileIntroTextWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  mobileh1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 36,
    color: colors.black,
  },
  mobileText: {
    fontFamily: FiraSans,
    fontSize: 20,
    color: colors.black,
  },
  mobileBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  mobileCarouselContainer: {
    marginBottom: 95,
  },

  webContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webIntro: {
    marginTop: 84,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  webIntroTextWrap: {
    width: '100%',
    maxWidth: 767,
    display: 'flex',
    flexDirection: 'column',
  },
  webh1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 36,
    color: colors.black,
  },
  webText: {
    fontFamily: FiraSans,
    fontSize: 20,
    color: colors.black,
  },
  webBtn: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  webCarouselContainer: {
    width: '100%',
    maxWidth: 1000,
    marginTop: 40,
    marginBottom: 95,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
});

export default styles;