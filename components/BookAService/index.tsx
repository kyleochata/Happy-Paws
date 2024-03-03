import { useState } from 'react';
import { Platform, View, Text, TextInput, Image } from 'react-native';
import Container from '../Container';
import BtnDark from '../Buttons/BtnDark';
import styles from './style';
import RadioButton, { RadioOption } from '../Buttons/RadioButton/RadioButton';

const BookAService = () => {
  const mobile = Platform.OS !== 'web';
  // WILL GO BACK TO FIX CONTACT FORM
  const [formData, setFormData] = useState<any>({ name: '', email: '', phone: '', message: '' });
  const { name, email, phone, message } = formData;

  // RADIO BUTTON
  const [selectedValue, setSelectedValue] = useState('cat');
  const options: RadioOption[] = [
    { label: 'Cat', value: 'cat' },
    { label: 'Dog', value: 'dog' },
  ];

  return (
    <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
      <Container>
        {/* CONTACT FORM */}
        <View style={mobile ? styles.mobFormWrap : styles.webFormWrap}>
          <Text style={mobile ? styles.mobH1 : styles.webH1}>Book a Service</Text>

          <View style={mobile ? styles.mobForm : styles.webForm}>
            <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Name</Text>
            <TextInput
              style={mobile ? styles.mobInput : styles.webInput}
              onChange={(value) => setFormData({...formData, name: value})}
              value={name}
            />
            <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Email</Text>
            <TextInput
              style={mobile ? styles.mobInput : styles.webInput}
              onChange={(value) => setFormData({...formData, email: value})}
              inputMode='email'
              value={email}
            />
            <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Phone Number</Text>
            <TextInput
              style={mobile ? styles.mobInput : styles.webInput}
              onChange={(value) => setFormData({...formData, phone: value})}
              inputMode='tel'
              value={phone}
            />
            <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Message</Text>
            <TextInput
              style={mobile ? styles.mobTextArea : styles.webTextArea}
              onChange={(value) => setFormData({...formData, message: value})}
              multiline
              numberOfLines={4}
              value={message}
            />

            {/* RADIO BUTTONS SECTION HERE */}
            <RadioButton
              options={options}
              selectedOption={selectedValue}
              onSelect={value => setSelectedValue(value)}
            />

            <View style={mobile ? styles.mobSubmitBtn : styles.webSubmitBtn}>
              <BtnDark value='Submit' />
            </View>
          </View>
          
        </View>
      </Container>
    </View>
  );
};

export default BookAService;