import { Montserrat, MontserratBold, FiraSans } from './fonts'
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
    maxWidth: '95%',
    paddingLeft: 86,
    paddingRight: 86,
    paddingTop: 20,
    paddingBottom: 20,
  },
  mobileHeaderWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 30,
    paddingBottom: 20,
    paddingRight: 15,
  },
  webHeaderWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 86,
    paddingRight: 86,
    paddingTop: 20,
  },
  mobileLogoImg: {
    width: 200,
    height: 78,
  },
  webLogoImg: {
    width: 320,
    height: 124,
  },
  webHeaderMenu: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
  },
  webHeaderMenuItem: {
    fontFamily: Montserrat,
    fontSize: 24,
  },
  mobileHeaderMenu: {
    display: 'flex',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modalMenuItem: {
    color: '#fff',
    fontFamily: MontserratBold,
    fontSize: 40,
  },
  modalMenuBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 5,
  },
  modalMenuBtnText: {
    color: '#A189C8',
    fontFamily: MontserratBold,
    fontSize: 40,
  },
  bookBtn: {
    width: 120,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A189C8',
    borderRadius: 5,
    paddingTop: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookBtnText: {
    color: '#fff',
    fontFamily: Montserrat,
    fontSize: 30,
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
  mobileFooterWrapper: {
    width: '100%',
    backgroundColor: '#A189C8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
  },
  webFooterWrapper: {
    width: '100%',
    backgroundColor: '#A189C8',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 86,
    paddingRight: 86,
    paddingTop: 86,
    paddingBottom: 50,
  },
  mobileFooterLogoImg: {
    marginBottom: 20,
    width: 184,
    height: 70,
  },
  webFooterLogoImg: {
    width: 320,
    height: 125,
    position: 'absolute',
    bottom: 120,
    left: 50,
  },
  mobileFooterTopLinks: {
    color: '#fff',
    fontFamily: FiraSans,
    fontSize: 22,
  },
  webFooterTopLinks: {
    color: '#fff',
    fontFamily: FiraSans,
    fontSize: 28,
  },
  mobileFooterText: {
    paddingTop: 18,
    color: '#fff',
    fontFamily: FiraSans,
    fontSize: 14,
    textAlign: 'center',
  },
  webFooterText: {
    paddingTop: 50,
    fontFamily: FiraSans,
    color: '#fff',
    fontSize: 18,
  },
  mobileFooterBottomLinks: {
    paddingTop: 18,
    fontFamily: FiraSans,
    color: '#fff',
    fontSize: 14,
  },
  webFooterBottomLinks: {
    paddingTop: 20,
    fontFamily: FiraSans,
    color: '#fff',
    fontSize: 18,
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
