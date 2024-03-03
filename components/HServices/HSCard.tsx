import { View, Text, Image, Platform } from 'react-native'
import styles from './style'

export interface HSCardProps {
  title: string
  img: any
  description: string
}

const HSCard = ({ title, img, description }: HSCardProps) => {
  return (
    <View style={Platform.OS === 'web' ? styles.wHSCard : styles.mHSCard}>
      {Platform.OS === 'web' ? (
        <>
          <Text style={styles.wHSTitle}>{title}</Text>
          <Image source={img} style={styles.wHSImg} />
          <Text style={styles.wHSText}>{description}</Text>
        </>
      ) : (
        <>
          <Image source={img} style={styles.mHSImg} />
          <View style={styles.mHSTCon}>
            <Text style={styles.mHSTitle}>Boarding</Text>
            <Text style={styles.mHSText}>{description}</Text>
          </View>
        </>
      )}
    </View>
  )
}
export default HSCard
