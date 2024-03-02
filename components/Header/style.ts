import { StyleSheet } from 'react-native';
import { Montserrat } from '../../utils/fonts';
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  mobileHeaderWrapper: {
    width: '100%',
    backgroundColor: colors.white,
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
  mobileLogoImg: {
    width: 150,
    height: 60,
    margin: 0,
    objectFit: 'contain',
  },
  mobileHeaderMenu: {
    display: 'flex',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalMenuItem: {
    color: colors.white,
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
  },
  modalMenuBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 5,
  },
  modalMenuBtnText: {
    color: colors.lightPurple,
    fontFamily: 'Montserrat-Bold',
    fontSize: 40,
  },

  webHeaderWrapper: {
    width: '100%',
    backgroundColor: colors.white,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  webLogoImg: {
    width: '20%',
    minWidth: 150,
    height: 100,
    margin: 0,
    resizeMode: 'contain',
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
  // bookBtn: {
  //   width: 120,
  //   height: 45,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: colors.lightPurple,
  //   borderRadius: 5,
  //   paddingTop: 10,
  //   paddingBottom: 10,
  //   shadowColor: colors.black,
  //   shadowOffset: {
  //     width: 2,
  //     height: 1.5,
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  // },
  // bookBtnText: {
  //   color: colors.white,
  //   fontFamily: Montserrat,
  //   fontSize: 30,
  // },
});

export default styles;