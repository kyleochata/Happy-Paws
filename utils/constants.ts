import { Montserrat } from './fonts'
import { StyleSheet } from 'react-native'

export const colors = {
  lightPurple: '#A189C8',
  darkPurple: '#522689',
  white: '#ffffff',
  black: '#000000',
}

//put all stylings in here
const styles = StyleSheet.create({
  container: {
    maxWidth: 1280,
    width: '100%',
  },
  webContainer: {
    width: '100%',
    // height: '100%',
    // paddingLeft: 86,
    // paddingRight: 86,
    // paddingTop: 91,
    // paddingBottom: 96,
    maxWidth: 1280,
  },
  mobileHomeView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  webHomeView: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'green',
    flexDirection: 'column',
  },
  mobileHeroImg: {
    width: '100%',
    height: 275,
    objectFit: 'contain',
  },
  webHeroImg: {
    width: '100%',
    height: 400,
    resizeMode: 'contain',
    minWidth: 375,
  },
  heroTitle: {
    fontFamily: Montserrat,
    fontSize: 24,
  },
  mobileHeroView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: colors.white,
    padding: 20,
  },
  webHeroView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    minWidth: 375,
  },
  webHIContainer: {
    maxWidth: 640,
    minWidth: 375,
    width: '50%',
    height: 400,
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
  mobileTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: 1,
    lineHeight: 36,
    marginBottom: 5,
  },
  mobileHeroText: {
    fontFamily: 'Fira Sans',
    fontSize: 24,
    lineHeight: 26,
    marginBottom: 10,
    marginTop: 15,
  },
  webHeroText: {
    fontFamily: 'Fira Sans',
    fontSize: 24,
    lineHeight: 30,
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

export const buttonStyles = StyleSheet.create({
  bookBtnLight: {
    backgroundColor: colors.lightPurple,
    width: 184,
    height: 50,
    borderRadius: 15,
    alignItems: 'center', // Center the button horizontally
    justifyContent: 'center', // Center the button vertically
    marginVertical: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  bookBtnLTxt: {
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1,
  },
})
