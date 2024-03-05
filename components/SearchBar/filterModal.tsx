import { View, Text } from 'react-native'
import { Foundation } from '@expo/vector-icons'
import styles from './style'
const FilterModal = () => {
  return (
    <View style={styles.fMCon}>
      <View style={styles.fMBorderArrow}>
        <Foundation name="arrow-up" size={80} color="white" />
      </View>
      <View style={styles.fMIC}>
        <View>Pet:</View>
        <View>Service: </View>
        <View>Price Range: </View>
      </View>
    </View>
  )
}
export default FilterModal
