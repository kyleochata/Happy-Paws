import { StyleSheet } from 'react-native'
import { Montserrat, FiraSans } from '../../utils/fonts'
import { colors } from '../../utils/constants'

const styles = StyleSheet.create({
  HSS: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    gap: 30,
    marginBottom: 10,
  },
  HSCCon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    gap: 20,
  },
  wHSSTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 44,
    color: colors.darkPurple,
    margin: 20,
  },
  wHSCard: {
    backgroundColor: colors.lightPurple,
    color: colors.white,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
    maxWidth: 300,
    minHeight: 500,
    gap: 20,
    borderRadius: 15,
  },
  wHSTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: colors.white,
    width: 170,
    textAlign: 'center',
  },
  wHSImg: {
    width: 125,
    height: 125,
    resizeMode: 'contain',
  },
  wHSText: {
    fontFamily: FiraSans,
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
  },
  mHSSTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 36,
    color: colors.darkPurple,
  },
  mHSCard: {
    backgroundColor: colors.lightPurple,
    color: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    minHeight: 200,
    gap: 20,
    borderRadius: 15,
  },
  mHSImg: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  mHSTCon: {
    flexDirection: 'column',
    width: '66%',
  },
  mHSTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 26,
    fontWeight: '700',
    color: colors.white,
    textAlign: 'left',
  },
  mHSText: {
    fontFamily: FiraSans,
    fontSize: 16,
    color: colors.white,
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 5,
  },
})

export default styles
