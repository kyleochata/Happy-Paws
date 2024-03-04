// import React from 'react'
// import { ScrollView, Platform } from 'react-native'
// import { useNavigation } from '@react-navigation/native'
// import Container from '../components/Container'
// import Header from '../components/Header'
// import Hero from '../components/Hero/Hero'
// import PhotoGallery from '../components/PhotoGallery'
// import Contact from '../components/Contact'
// import Footer from '../components/Footer'
// import styles from '../utils/constants'
// import ValueBanner from '../components/Banner/ValuesBanner/index'
// import About from '../components/About'
// import HServices from '../components/HServices'

// const HomeScreen = () => {
//   //const navigation = useNavigation<any>()

//   return (
//     <ScrollView
//       contentContainerStyle={
//         Platform.OS === 'web' ? styles.webHomeView : styles.mobileHomeView
//       }
//       scrollEnabled={true}
//     >
//       <Header />
//       <Container>
//         <Hero />
//       </Container>
//       <ValueBanner />
//       <Container>
//         <About />
//         <HServices />
//         <PhotoGallery />

//         <Contact />
//       </Container>
//       <Footer />
//     </ScrollView>
//   )
// }

// export default HomeScreen
import React from 'react'
import { FlatList, Platform, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import Header from '../components/Header'
import Hero from '../components/Hero/Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import styles from '../utils/constants'
import ValueBanner from '../components/Banner/ValuesBanner/index'
import About from '../components/About'
import HServices from '../components/HServices'

const data = [
  { id: 'header' },
  { id: 'hero' },
  { id: 'valueBanner' },
  { id: 'about' },
  { id: 'hServices' },
  { id: 'contact' },
  { id: 'footer' },
]

const renderItem = ({ item }: any) => {
  switch (item.id) {
    case 'header':
      return (
        <View style={styles.stretchCon}>
          <Header />
        </View>
      )
    case 'hero':
      return (
        <View style={styles.stretchCon}>
          <Container>
            <Hero />
          </Container>
        </View>
      )
    case 'valueBanner':
      return <ValueBanner />
    case 'about':
      return (
        <View style={styles.stretchCon}>
          <Container>
            <About />
          </Container>
        </View>
      )
    case 'hServices':
      return (
        <View style={styles.stretchCon}>
          <Container>
            <HServices />
          </Container>
        </View>
      )
    case 'contact':
      return (
        <View style={styles.stretchCon}>
          <Container>
            <Contact />
          </Container>
        </View>
      )
    case 'footer':
      return (
        <View style={styles.stretchCon}>
          <Footer />
        </View>
      )
    default:
      return null
  }
}

const HomeScreen = () => {
  //const navigation = useNavigation<any>();

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={
        Platform.OS === 'web' ? styles.webHomeView : styles.mobileHomeView
      }
      scrollEnabled={true}
    />
  )
}

export default HomeScreen
