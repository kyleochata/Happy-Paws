import { Platform, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import Form from '../Form';
import { useServiceForm } from '../../utils/hooks';

const Contact = () => {
  const mobile = Platform.OS !== 'web';
  const { formData, inputs, handleChange, handleSubmit } = useServiceForm();

  return (
    <View style={mobile ? styles.mobileContactWrapper : styles.webContactWrapper}>
      <Text style={mobile ? styles.mobileContactH1 : styles.webContactH1}>Need assistance or have questions?</Text>
      <Text style={mobile ? styles.mobileContactH2 : styles.webContactH2}>Don't hesitate to reach out to us. Our team is here to help!</Text>

      {/* CONTACT FORM */}
      {/* v PREVENT KEYBOARD FROM COVERING INPUT BOXES */}
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        style={mobile ? styles.mobileContactFormWrap : styles.webContactFormWrap}
      >
        <View style={mobile ? styles.mobileContactForm : styles.webContactForm}>
          <Form
            formData={formData}
            inputs={inputs}
            handleChange={handleChange}
            mobile={mobile}
            handleSubmit={handleSubmit}
          />
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