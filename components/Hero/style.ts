import { StyleSheet } from 'react-native'
import { Montserrat, FiraSans } from '../../utils/fonts'
import { colors } from '../../utils/constants'

const styles = StyleSheet.create({
  heroTitle: {
    fontFamily: Montserrat,
    fontSize: 24,
  },
  mobileHeroImg: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
    margin: 0,
  },
  mobileHeroView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: 20,
  },
  mobileTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 36,
    marginBottom: 5,
  },
  mobileHeroText: {
    fontFamily: FiraSans,
    fontSize: 24,
    lineHeight: 26,
    marginBottom: 10,
    marginTop: 15,
  },
  mobileHeroSubTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    marginBottom: 5,
    marginTop: 15,
  },
  mobileHeroSubTitle2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    marginBottom: 15,
  },

  webHeroImg: {
    width: '100%',
    maxHeight: 650,
    minHeight: 400,
    resizeMode: 'contain',
    minWidth: 375,
  },
  webHeroView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    minWidth: 375,
    marginBottom: 20,
  },
  webHIContainer: {
    maxWidth: 640,
    minWidth: 375,
    width: '50%',
    height: '100%',
    maxHeight: 650,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  webTContainer: {
    maxWidth: 640,
    width: '50%',
    padding: 20,
    flexWrap: 'wrap',
  },
  webTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 48,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 50,
    marginBottom: 10,
  },
  webHeroText: {
    fontFamily: FiraSans,
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 10,
    marginTop: 15,
  },
  webHeroSubTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    marginBottom: 5,
    marginTop: 10,
  },
  webHeroSubTitle2: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 30,
    marginBottom: 15,
  },
})

export default styles
