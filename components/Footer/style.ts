import { StyleSheet } from 'react-native'
import { FiraSans } from '../../utils/fonts'
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  mobileFooterWrapper: {
    width: '100%',
    backgroundColor: colors.lightPurple,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
  },
  mobileFooterLogoImg: {
    marginBottom: 20,
    width: 184,
    height: 70,
  },
  mobileFooterTopLinks: {
    color: colors.white,
    fontFamily: FiraSans,
    fontSize: 22,
  },
  mobileFooterText: {
    paddingTop: 18,
    color: colors.white,
    fontFamily: FiraSans,
    fontSize: 14,
    textAlign: 'center',
  },
  mobileFooterBottomLinks: {
    paddingTop: 18,
    fontFamily: FiraSans,
    color: colors.white,
    fontSize: 14,
  },

  webFooterWrapper: {
    width: '100%',
    backgroundColor: colors.lightPurple,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 86,
    paddingRight: 86,
    paddingTop: 86,
    paddingBottom: 50,
  },
  webFooterLogoImg: {
    width: 320,
    height: 125,
    position: 'absolute',
    bottom: 120,
    left: 50,
  },
  webFooterTopLinks: {
    color: colors.white,
    fontFamily: FiraSans,
    fontSize: 28,
  },
  webFooterText: {
    paddingTop: 50,
    fontFamily: FiraSans,
    color: colors.white,
    fontSize: 18,
  },
  webFooterBottomLinks: {
    paddingTop: 20,
    fontFamily: FiraSans,
    color: colors.white,
    fontSize: 18,
  },
});

export default styles;