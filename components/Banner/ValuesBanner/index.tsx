import { View, Text, Platform } from 'react-native'
import ValueCard from './ValueCard'
import styles from './style'
import Container from '../../Container'
import valueData from './data'
const ValueBanner = () => {
  return (
    <View style={Platform.OS === 'web' ? styles.wVB : styles.mVB}>
      {Platform.OS === 'web' ? (
        <Container>
          <View style={styles.wVIC}>
            {valueData.map((value) => {
              return <ValueCard key={value.title} {...value} />
            })}
          </View>
        </Container>
      ) : (
        <Container>
          {valueData.map((value) => {
            return <ValueCard key={value.title} {...value} />
          })}
        </Container>
      )}
    </View>
  )
}
export default ValueBanner
