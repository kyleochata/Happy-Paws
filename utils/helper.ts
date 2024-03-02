import { Montserrat } from './fonts'
import { StyleSheet } from 'react-native'

//put all stylings in here
const styles = StyleSheet.create({
  mobileContainer: {
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 20,
    paddingBottom: 20,
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
    paddingRight: 15,
    paddingBottom: 20,
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
    width: 199,
    height: 100
  },
  webLogoImg: {
    width: 339,
    height: 140
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
    fontFamily: Montserrat,
    fontSize: 40,
    fontWeight: '700',
  },
  modalMenuBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 5
  },
  modalMenuBtnText: {
    color: '#A189C8',
    fontFamily: Montserrat,
    fontSize: 40,
    fontWeight: 'bold',
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
  mainHomeView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  heroImg: {
    maxWidth: '100%',
    height: 300,
    objectFit: 'contain',
  },
  heroTitle: {
    fontFamily: Montserrat,
    fontSize: 24,
  },
})

export default styles