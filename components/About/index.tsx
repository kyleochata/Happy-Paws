import { View, Text, Image, Platform } from 'react-native'
import styles from './style'
const About = () => {
  return (
    <View style={Platform.OS === 'web' ? styles.wAView : styles.mAView}>
      {Platform.OS === 'web' ? (
        <>
          <View style={styles.wATextCon}>
            <Text style={styles.wATitle}>About Us</Text>
            <Text style={styles.wATextReg}>
              Welcome to Happy Paws Pet Hotel, where pets find comfort, care,
              and companionship. Founded with a passion for animals, we provide
              a loving and safe environment for your furry family members.
            </Text>
            <Text style={styles.wATextReg}>
              At Happy Paws, we prioritize your pet's well-being, offering
              spacious accommodations, supervised play sessions, and
              professional grooming services. Whether it's a day of daycare or
              an extended stay, your pet will be treated with love and attention
              by our dedicated team of animal lovers.
            </Text>
            <Text style={styles.wATextSemi}>
              Join the Happy Paws family, where tails wag and hearts are happy!
            </Text>
          </View>
          <View style={styles.wAICon}>
            <Image
              source={require('../../assets/images/aboutcatsr.jpg')}
              style={styles.wAImg}
            />
          </View>
        </>
      ) : (
        <>
          <Image
            source={require('../../assets/images/aboutcatsr.jpg')}
            style={styles.mAImg}
          />
          <Text style={styles.mATitle}>About Us</Text>
          <Text style={styles.mATextReg}>
            Welcome to Happy Paws Pet Hotel, where pets find comfort, care, and
            companionship. Founded with a passion for animals, we provide a
            loving and safe environment for your furry family members.
          </Text>
          <Text style={styles.mATextReg}>
            At Happy Paws, we prioritize your pet's well-being, offering
            spacious accommodations, supervised play sessions, and professional
            grooming services. Whether it's a day of daycare or an extended
            stay, your pet will be treated with love and attention by our
            dedicated team of animal lovers.
          </Text>
          <Text style={styles.mATextSemi}>
            Join the Happy Paws family, where tails wag and hearts are happy!
          </Text>
        </>
      )}
    </View>
  )
}
export default About
