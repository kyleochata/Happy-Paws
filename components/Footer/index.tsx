import { View, Text, Image, Platform } from 'react-native'
import styles from '../../utils/constants'
import Container from '../Container'

const Footer = () => {
  const mobile = Platform.OS !== 'web'

  return (
    <View
      style={!mobile ? styles.webFooterWrapper : styles.mobileFooterWrapper}
    >
      <Image
        source={require('../../assets/images/logo/2.png')}
        style={mobile ? styles.mobileFooterLogoImg : styles.webFooterLogoImg}
      />
      <Text
        style={mobile ? styles.mobileFooterTopLinks : styles.webFooterTopLinks}
      >
        Contact | FAQs | Locations
      </Text>
      <Text style={mobile ? styles.mobileFooterText : styles.webFooterText}>
        &copy;2024 All Rights Reserved. Happy Paws is a registered trademark of
        Company Name.
      </Text>
      <Text
        style={
          mobile ? styles.mobileFooterBottomLinks : styles.webFooterBottomLinks
        }
      >
        Privacy | Terms | Legal | Cookie Preferences
      </Text>
    </View>
  )
}

export default Footer
