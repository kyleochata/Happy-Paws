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
});

export default styles;