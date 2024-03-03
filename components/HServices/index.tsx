import { View, Text, Platform } from 'react-native'
import servicesData from './data'

import HSCard, { HSCardProps } from './HSCard'
import styles from './style'
const HServices = () => {
  return (
    <View style={styles.HSS}>
      <Text style={Platform.OS === 'web' ? styles.wHSSTitle : styles.mHSSTitle}>
        Services We Offer
      </Text>
      <View style={styles.HSCCon}>
        {servicesData.map((service: HSCardProps) => (
          <HSCard key={service.title} {...service} />
        ))}
      </View>
    </View>
  )
}
export default HServices
