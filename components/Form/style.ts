import { StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';

const styles = StyleSheet.create({
  mobFormLabel: {
    color: colors.black,
    fontFamily: 'Montserrat-Medium',
    fontSize: 24,
    marginBottom: 5,
  },
  mobInput: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 420,
    height: 43,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  mobTextArea: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 207,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    verticalAlign: 'top',
  },
  mobSubmitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },

  webForm: {
    width: '100%',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  webFormLabel: {
    color: colors.black,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 30,
    marginBottom: 5,
  },
  webInput: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 10,
  },
  webTextArea: {
    backgroundColor: colors.lavender,
    borderRadius: 10,
    width: '100%',
    maxWidth: 600,
    height: 274,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 15,
    verticalAlign: 'top',
  },
  webSubmitBtn: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 33,
  },

  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalContainer: {
    width: 500,
    maxHeight: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: colors.white,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 2,
      height: 1.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalH1: {
    color: colors.black,
    fontFamily: 'Montserrat-Bold',
    fontSize: 26,
  },
  modalText: {
    color: colors.black,
    fontFamily: 'Montserrat-Bold',
    fontSize: 26,
  },
});

export default styles;