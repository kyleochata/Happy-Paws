import { StyleSheet } from 'react-native';
import { FiraSans } from '../../utils/fonts'
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
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
    marginTop: 62
  },
  mobileIntroTextWrap: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileh1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 36,
    color: colors.black,
    marginBottom: 5,
  },
  mobileText: {
    fontFamily: FiraSans,
    fontSize: 20,
    color: colors.black,
    marginBottom: 22,
  },
  mobileBtn: {
    width: 118,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mobileCarouselContainer: {
    marginBottom: 95,
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
});

export default styles;