import { StyleSheet } from 'react-native'

export const colors = {
  lavender: '#D6CDE2',
  lightPurple: '#A189C8',
  darkPurple: '#522689',
  white: '#ffffff',
  black: '#000000',
}

const styles = StyleSheet.create({
  mobileHomeView: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  webHomeView: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: colors.white,
    flexGrow: 1,
  },
  stretchCon: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default styles

export const buttonStyles = StyleSheet.create({
  bookBtnLight: {
    backgroundColor: colors.lightPurple,
    width: 184,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookBtnDark: {
    backgroundColor: colors.darkPurple,
    width: 184,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bookBtnLTxt: {
    color: colors.white,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1,
  },
  mobileViewPhotosBtn: {
    backgroundColor: colors.lightPurple,
    width: 110,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  webViewPhotosBtn: {
    backgroundColor: colors.lightPurple,
    width: 200,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mobilePhotosBtnLTxt: {
    color: colors.white,
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 14,
  },
  webPhotosBtnLTxt: {
    color: colors.white,
    fontFamily: 'FiraSans-SemiBold',
    fontSize: 20,
    letterSpacing: 1,
  },
  arrowBtn: {
    backgroundColor: colors.lightPurple,
    width: 40,
    height: 86,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})
