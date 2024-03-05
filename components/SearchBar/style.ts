import { StyleSheet } from 'react-native'
import { FiraSans, Montserrat } from '../../utils/fonts'
import { colors } from '../../utils/constants'

const styles = StyleSheet.create({
  sBContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkPurple,
    minHeight: 100,
    // padding: 10,
  },
  sBIC: {
    maxWidth: 1280, // gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    verticalAlign: 'top', // Change "text-top" to "top"
    margin: 0,
    gap: 20,
    flexWrap: 'wrap',
    paddingTop: 10,
    paddingBottom: 10,
  },
  sBInputCon: {
    width: 550,
    transform: 'translateY(9%)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  sBInput: {
    backgroundColor: colors.lavender,
    borderRadius: 15,
    fontSize: 22,
    fontFamily: FiraSans,
    width: 550,
    height: 60,

    color: colors.darkPurple,
    margin: 0,
  },
  sBSearch: {
    height: 45,
    width: 110,
    backgroundColor: colors.lightPurple,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  sBSearchText: {
    color: colors.white,
    fontSize: 22,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
  },
  wSBFText: {
    color: colors.white,
    fontSize: 30,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '600',
  },
  wOFMArrow: {
    margin: 10,
    position: 'relative',
  },
  fMCon: {
    position: 'absolute',
    top: '21%',
    left: '54.2%',
    width: 400,
    height: 300,
    zIndex: 5,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: 15,
    border: '1px solid #000000',
  },
  fMIC: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 20,
    flexWrap: 'wrap',
    zIndex: 5,
  },
  fMBorderArrow: {
    position: 'absolute',
    top: '-20%',
    left: '71.9%',
    backgroundColor: 'transparent',
  },

  mSBInput: {
    width: 260,
    height: 40,
    backgroundColor: colors.lavender,
    borderRadius: 15,
  },
})
export default styles
