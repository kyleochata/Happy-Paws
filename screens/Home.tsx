// import React from 'react'
// import { View, Button, Platform } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import Container from '../components/Container'
// import Hero from '../components/Hero/Hero'
// import styles from '../utils/constants'

// const HomeScreen = () => {
//   const navigation = useNavigation<any>()

//   return (
//     <View
//       style={Platform.OS === 'web' ? styles.webHomeView : styles.mobileHomeView}
//     >
//       <Container>
//         <Hero />
//         <Button
//           title="Go to Services"
//           onPress={() => navigation.navigate('Services')}
//         />
//       </Container>
//     </View>
//   )
// }

// export default HomeScreen
import { ScrollView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer'
import styles from '../utils/constants'

const HomeScreen = () => {
  const navigation = useNavigation<any>()

  return (
    <ScrollView
      contentContainerStyle={
        Platform.OS === 'web' ? styles.webHomeView : styles.mobileHomeView
      }
    >
      <Header />
      <Container>
        <Hero />
      </Container>
      <Footer />
    </ScrollView>
  )
}

export default HomeScreen
