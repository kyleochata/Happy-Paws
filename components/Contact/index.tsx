import { Platform, View, Text, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import SubmitButton from '../Buttons/SubmitButton';
import Form from '../Form';
import { useServiceForm } from '../../utils/hooks';

const Contact = () => {
  const mobile = Platform.OS !== 'web';
  const { inputs, handleChange, handleSubmit } = useServiceForm();

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
            <SubmitButton value='Submit' onPress={handleSubmit} />
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