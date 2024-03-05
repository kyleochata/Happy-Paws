import { useState } from 'react'
import {
  View,
  Image,
  Pressable,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native'
import { Link } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import styles from './style'
import { colors } from '../../utils/constants'
import Container from '../Container'
import BookBtnLight from '../Buttons/BookNow/BookBtnLight'

const Header = () => {
  const mobile = Platform.OS !== 'web'
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const toggle = () => setModalVisible(!modalVisible)

  return (
    <Container>
      <View
        style={!mobile ? styles.webHeaderWrapper : styles.mobileHeaderWrapper}
      >
        <Image
          source={require('../../assets/images/logo/1.png')}
          style={mobile ? styles.mobileLogoImg : styles.webLogoImg}
        />

        {mobile ? (
          <View style={styles.mobileHeaderMenu}>
            <Pressable style={styles.modalMenuBtn} onPress={toggle}>
              <View>
                {modalVisible ? (
                  ''
                ) : (
                  <Ionicons name="menu" size={40} color={colors.lightPurple} />
                )}
              </View>
            </Pressable>
            <Modal
              visible={modalVisible}
              animationType="fade"
              transparent={true}
              onRequestClose={() => {
                setModalVisible(!modalVisible)
              }}
            >
              <TouchableWithoutFeedback
                onPressOut={() => {
                  setModalVisible(!modalVisible)
                }}
              >
                <View style={styles.modal}>
                  <Link to="/home" style={styles.modalMenuItem}>
                    Home
                  </Link>
                  <Link to="/services" style={styles.modalMenuItem}>
                    Services
                  </Link>
                  <Link to="#" style={styles.modalMenuItem}>
                    Contact
                  </Link>
                  <BookBtnLight value="Book" />
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
        ) : (
          <View style={styles.webHeaderMenu}>
            <Link to="/Home" style={styles.webHeaderMenuItem}>
              Home
            </Link>
            <Link to="/services" style={styles.webHeaderMenuItem}>
              Services
            </Link>
            <Link to="#" style={styles.webHeaderMenuItem}>
              Contact
            </Link>
            <BookBtnLight value="Book" />
          </View>
        )}
      </View>
    </Container>
  )
}

export default Header
