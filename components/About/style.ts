import { colors } from '../../utils/constants'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wAView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 20,
    width: '100%',
    flexWrap: 'wrap',
    minHeight: 700,
    gap: 20,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },

  wATextCon: {
    width: '38%',
    minWidth: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  wAICon: {
    // maxWidth: 640,
    minWidth: 375,
    width: '58%',
    minHeight: 600,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },

  wAImg: {
    width: '100%',
    // minWidth: 500,
    height: '100%',
    minHeight: 600,
    resizeMode: 'contain',
  },
  wATitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 44,
    fontWeight: '600',
    color: colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },

  wATextReg: {
    fontFamily: 'FiraSans',
    fontSize: 24,
    fontWeight: '400',
    color: colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },
  wATextSemi: {
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
    paddingTop: 10,
    paddingBottom: 10,
  },
  mAView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },

  mAImg: {
    width: '100%',
    maxHeight: 400,
    objectFit: 'contain',
    margin: 0,
  },
  mATitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 36,
    fontWeight: '600',
    color: colors.black,

    marginBottom: 10,
  },
  mATextReg: {
    fontFamily: 'FiraSans',
    fontSize: 18,
    fontWeight: '400',
    color: colors.black,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  mATextSemi: {
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 18,
    fontWeight: '600',
    color: colors.black,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
})

export default styles
