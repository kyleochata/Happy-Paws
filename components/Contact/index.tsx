import { useState } from 'react';
import { Platform, View, Text, TextInput, Image } from 'react-native';
import styles from './style';
import BookBtnDark from '../Buttons/BookNow/BookBtnDark';

const Contact = () => {
  const mobile = Platform.OS !== 'web';
  // WILL GO BACK TO FIX CONTACT FORM
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const { name, email, phone, message } = formData;

  return (
    <View style={mobile ? styles.mobileContactWrapper : styles.webContactWrapper}>
      <Text style={mobile ? styles.mobileContactH1 : styles.webContactH1}>Need assistance or have questions?</Text>
      <Text style={mobile ? styles.mobileContactH2 : styles.webContactH2}>Don't hesitate to reach out to us. Our team is here to help!</Text>

      {/* CONTACT FORM */}
      <View style={mobile ? styles.mobileContactFormWrap : styles.webContactFormWrap}>
        <View style={mobile ? styles.mobileContactForm : styles.webContactForm}>
          <Text style={mobile ? styles.mobileContactUs : styles.webContactUs}>Contact Us</Text>

          <Text style={mobile ? styles.mobileContactFormLabel : styles.webContactFormLabel}>Name</Text>
          <TextInput
            style={mobile ? styles.mobileContactInput : styles.webContactInput}
            onChange={(value) => setFormData({...formData, name: value})}
            value={name}
          />
          <Text style={mobile ? styles.mobileContactFormLabel : styles.webContactFormLabel}>Email</Text>
          <TextInput
            style={mobile ? styles.mobileContactInput : styles.webContactInput}
            onChange={(value) => setFormData({...formData, email: value})}
            inputMode='email'
            value={email}
          />
          <Text style={mobile ? styles.mobileContactFormLabel : styles.webContactFormLabel}>Phone Number</Text>
          <TextInput
            style={mobile ? styles.mobileContactInput : styles.webContactInput}
            onChange={(value) => setFormData({...formData, phone: value})}
            inputMode='tel'
            value={phone}
          />
          <Text style={mobile ? styles.mobileContactFormLabel : styles.webContactFormLabel}>Message</Text>
          <TextInput
            style={mobile ? styles.mobileContactTextArea : styles.webContactTextArea}
            onChange={(value) => setFormData({...formData, message: value})}
            multiline
            numberOfLines={4}
            value={message}
          />

          <View style={mobile ? styles.mobileSubmitBtn : styles.webSubmitBtn}>
            <BookBtnDark value='Submit' />
          </View>
        </View>
        
        <Image
          source={require('../../assets/images/contact-pets.jpg')}
          style={mobile ? styles.mobileContactImg : styles.webContactImg}
        />
      </View>
    </View>
  );
};

export default Contact;