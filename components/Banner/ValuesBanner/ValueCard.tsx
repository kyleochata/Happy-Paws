import { View, Text, Image, Platform } from 'react-native'
import styles from './style'

interface ValueCardProps {
  title: string
  description: string
  image: any
}
const ValueCard = ({ title, description, image }: ValueCardProps) => {
  return (
    <View style={Platform.OS === 'web' ? styles.wVC : styles.mVC}>
      <View style={styles.VCIContainer}>
        <Image source={image} style={styles.vCI} />
      </View>
      <Text style={styles.vCTitle}>{title}</Text>
      <Text style={Platform.OS === 'web' ? styles.vCText : styles.mVCText}>
        {description}
      </Text>
    </View>
  )
}
export default ValueCard
