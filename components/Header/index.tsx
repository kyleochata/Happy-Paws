import { useState } from 'react';
import { View, Text, Image, Pressable, Platform, Modal, TouchableWithoutFeedback } from 'react-native';
import { Link } from '@react-navigation/native';
import styles from '../../utils/constants';

const Header = () => {
  const mobile = Platform.OS !== 'web';
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const toggle = () => setModalVisible(!modalVisible);

  return (
    <View style={!mobile ? styles.webHeaderWrapper : styles.mobileHeaderWrapper}>
      <Image
        source={require('../../assets/images/logo/1.png')}
        style={mobile ? styles.mobileLogoImg : styles.webLogoImg}
      />

      {mobile ? (
        <View style={styles.mobileHeaderMenu}>
          <Pressable style={styles.modalMenuBtn} onPress={toggle}>
            <Text style={styles.modalMenuBtnText}>
              {modalVisible ? '' : '☰'}
            </Text>
          </Pressable>
          <Modal
            visible={modalVisible}
            animationType='fade'
            transparent={true}
            onRequestClose={() => {setModalVisible(!modalVisible)}}
          >
            <TouchableWithoutFeedback
              onPressOut={() => {setModalVisible(!modalVisible)}}
            >
              <View style={styles.modal}>
                <Link to='#' style={styles.modalMenuItem}>Home</Link>
                <Link to='/services' style={styles.modalMenuItem}>Services</Link>
                <Link to='#' style={styles.modalMenuItem}>Contact</Link>
                <Pressable style={styles.bookBtn}>
                  <Text style={styles.bookBtnText}>Book</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
      ) : (
        <View style={styles.webHeaderMenu}>
          <Link to='#' style={styles.webHeaderMenuItem}>Home</Link>
          <Link to='/services' style={styles.webHeaderMenuItem}>Services</Link>
          <Link to='#' style={styles.webHeaderMenuItem}>Contact</Link>
          <Pressable style={styles.bookBtn}>
            <Text style={styles.bookBtnText}>Book</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Header;