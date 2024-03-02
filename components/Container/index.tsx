import { Platform, View, ScrollView } from 'react-native'
import styles from '../../utils/constants'

type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <View
      style={Platform.OS === 'web' ? styles.webContainer : styles.container}
    >
      {children}
    </View>
  )
}

export default Container
