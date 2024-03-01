import { Montserrat } from './fonts'
import { StyleSheet } from 'react-native'

//put all stylings in here
const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '80%',
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
  },
  heroImg: {
    width: '100%',
    maxHeight: 250,
  },
  heroTitle: {
    fontFamily: Montserrat,
    fontSize: 24,
  },
})

export default styles
