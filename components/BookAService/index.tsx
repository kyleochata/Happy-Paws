import { useState } from 'react';
import { Platform, View, Text, TextInput, Image } from 'react-native';
import Container from '../Container';
import BtnDark from '../Buttons/BtnDark';
import styles from './style';
import RadioButton, { RadioOption } from '../Buttons/RadioButton/RadioButton';
import Divider from '../Divider';
import { colors } from '../../utils/constants';

const BookAService = () => {
  const mobile = Platform.OS !== 'web';
  // WILL GO BACK TO FIX CONTACT FORM
  const [formData, setFormData] = useState<any>({ name: '', email: '', phone: '', message: '' });
  const { name, email, phone, message } = formData;

  // RADIO BUTTON
  const [selectedValue, setSelectedValue] = useState('cat');
  const petType: RadioOption[] = [
    { label: 'Cat', value: 'cat' },
    { label: 'Dog', value: 'dog' },
  ];

  const boardingOptions: RadioOption[] = [
    { label: 'Standard', value: 'standardBoarding' },
    { label: 'Deluxe', value: 'deluxeBoarding' },
    { label: 'Luxury', value: 'luxuryBoarding' },
  ];

  const daycareOptions: RadioOption[] = [
    { label: 'Basic', value: 'basicDaycare' },
    { label: 'Standard', value: 'standardDaycare' },
    { label: 'Premium', value: 'premiumDaycare' },
  ];

  const groomingOptions: RadioOption[] = [
    { label: 'Basic', value: 'basicGrooming' },
    { label: 'Standard', value: 'standardGrooming' },
    { label: 'Premium', value: 'premiumGrooming' },
  ];

  const trainingOptions: RadioOption[] = [
    { label: 'Basic', value: 'basicTraining' },
    { label: 'Standard', value: 'standardTraining' },
    { label: 'Premium', value: 'premiumTraining' },
  ];

  return (
    <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
      <Container>
        {/* CONTACT FORM */}
        <View style={mobile ? styles.mobFormWrap : styles.webFormWrap}>
          <Text style={mobile ? styles.mobH1 : styles.webH1}>Book a Service</Text>

          {/* USER FORM */}
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
          </View>

          <View style={mobile ? styles.mobRadioBtnForm : styles.webRadioBtnForm}>
            {/* RADIO BUTTONS SECTION HERE */}
            <View style={mobile ? styles.mobRadioBtnFormWrap : styles.webRadioBtnFormWrap}>
              <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Pet:</Text>
              <RadioButton
                options={petType}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
            </View>

          <Text style={mobile ? styles.mobFormLabel  : styles.webFormLabel }>Services:</Text>
            <View style={mobile ? styles.mobServices : styles.webServices}>
              <Text style={mobile ? styles.mobH2 : styles.webH2}>Overnight Boarding</Text>
              <RadioButton
                options={boardingOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
              <Divider />

              <Text style={mobile ? styles.mobH2 : styles.webH2}>Daycare</Text>
              <RadioButton
                options={daycareOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
              <Divider />

              <Text style={mobile ? styles.mobH2 : styles.webH2}>Grooming</Text>
              <RadioButton
                options={groomingOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
              <Divider />
              
              {/* IF CAT IS SELECTED, HIDE TRAINING SECTION */}
              <Text style={mobile ? styles.mobH2 : styles.webH2}>Training</Text>
              <RadioButton
                options={trainingOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
                />
            </View>
          </View>

          {/* SUBMIT BUTTON */}
          <View style={mobile ? styles.mobSubmitBtn : styles.webSubmitBtn}>
            <BtnDark value='Submit' />
          </View>
        </View>      
      </Container>
    </View>
  );
};

export default BookAService;