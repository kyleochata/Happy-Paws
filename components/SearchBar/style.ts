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
  mSBInput: {
    width: 260,
    height: 40,
    backgroundColor: colors.lavender,
    borderRadius: 15,
  },
})
export default styles
