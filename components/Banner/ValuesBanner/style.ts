import { colors } from '../../../utils/constants'
import { StyleSheet } from 'react-native'
import { FiraSans } from '../../../utils/fonts'

const ValueBannerStyles = StyleSheet.create({
  wVB: {
    backgroundColor: colors.lightPurple,
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mVB: {
    backgroundColor: colors.lightPurple,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  wVC: {
    maxWidth: '33%',
    minWidth: 300,
    height: 325,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 0,
    marginLeft: 0,
    padding: 20,
    backgroundColor: 'transparent',
  },
  mVC: {
    width: '100%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
  },
  wVIC: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20,
  },
  vCText: {
    color: colors.white,
    fontFamily: FiraSans,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    minHeight: 155,
  },
  vCTitle: {
    color: colors.darkPurple,
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  VCIContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  vCI: {
    width: 96,
    height: 96,
  },
})

export default ValueBannerStyles
