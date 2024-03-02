import { useState } from 'react';
import { Platform, View, Text, TextInput, Image } from 'react-native';
import styles from './style';

const Contact = () => {
  const mobile = Platform.OS !== 'web';
  const [text, setText] = useState<string>('');

  return (
    <View style={mobile ? styles.mobileContactWrapper : styles.webContactWrapper}>
      <Text style={mobile ? styles.mobileContactH1 : styles.webContactH1}>Need assistance or have questions?</Text>
      <Text style={mobile ? styles.mobileContactH2 : styles.webContactH2}>Don't hesitate to reach out to us. Our team is here to help!</Text>

      {/* CONTACT FORM */}
      <View style={mobile ? styles.mobileContactFormWrap : styles.webContactFormWrap}>
        <View style={mobile ? styles.mobileContactForm : styles.webContactForm}>
          <Text style={mobile ? styles.mobileContactUs : styles.webContactUs}>Contact Us</Text>

          <Text style={styles.contactFormLabel}>Name</Text>
          <TextInput
            style={styles.contactInput}
            onChangeText={setText}
            value={text}
          />
          <Text style={styles.contactFormLabel}>Email</Text>
          <TextInput
            style={styles.contactInput}
            onChangeText={setText}
            value={text}
          />
          <Text style={styles.contactFormLabel}>Phone Number</Text>
          <TextInput
            style={styles.contactInput}
            onChangeText={setText}
            value={text}
          />
          <Text style={styles.contactFormLabel}>Message</Text>
          <TextInput
            style={styles.contactTextArea}
            onChangeText={setText}
            numberOfLines={4}
            value={text}
          />



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