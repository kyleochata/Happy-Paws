import { useState } from 'react';
import { Platform, View, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import BtnDark from '../Buttons/BtnDark';
import Form from '../Form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const mobile = Platform.OS !== 'web';
  // WILL GO BACK TO FIX CONTACT FORM
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (name: any, value: any) => {
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = () => {
    console.log('Your message has been submitted!', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    })
  };

  const inputs = [
    { name: 'name', label: 'Name', value: formData.name },
    { name: 'email', label: 'Email', value: formData.email },
    { name: 'phone', label: 'Phone Number', value: formData.phone },
    { name: 'message', label: 'Message', value: formData.message, multiline: true }
  ];

  return (
    <View style={mobile ? styles.mobileContactWrapper : styles.webContactWrapper}>
      <Text style={mobile ? styles.mobileContactH1 : styles.webContactH1}>Need assistance or have questions?</Text>
      <Text style={mobile ? styles.mobileContactH2 : styles.webContactH2}>Don't hesitate to reach out to us. Our team is here to help!</Text>

      {/* CONTACT FORM */}
      <KeyboardAvoidingView style={mobile ? styles.mobileContactFormWrap : styles.webContactFormWrap}>
        <View style={mobile ? styles.mobileContactForm : styles.webContactForm}>
          <Form
              inputs={inputs}
              handleChange={handleChange}
              mobile={mobile}
              handleSubmit={handleSubmit}
            />

          <View style={mobile ? styles.mobileSubmitBtn : styles.webSubmitBtn}>
            <BtnDark value='Submit' onPress={handleSubmit} />
          </View>
        </View>
        
        <Image
          source={require('../../assets/images/contact-pets.jpg')}
          style={mobile ? styles.mobileContactImg : styles.webContactImg}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export default Contact;