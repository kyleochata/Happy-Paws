import { Montserrat } from './fonts'
import { StyleSheet } from 'react-native'

//put all stylings in here
const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    width: '100%',
  },
  webContainer: {
    width: '100%',
    height: '100%',
    paddingLeft: 86,
    paddingRight: 86,
    paddingTop: 91,
    paddingBottom: 96,
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
