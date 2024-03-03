import { useState } from 'react';
import { Platform, View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Container from '../Container';
import BtnDark from '../Buttons/BtnDark';
import styles from './style';
import RadioButton, { RadioOption } from '../Buttons/RadioButton/RadioButton';
import Divider from '../Divider';
import { colors } from '../../utils/constants';
import Form from '../Form';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const BookAService = () => {
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

  // RADIO BUTTON
  const [selectedValue, setSelectedValue] = useState('cat');
  const petTypeOptions: RadioOption[] = [
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

  const specialNeedsOptions: RadioOption[] = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  // DATE PICKER
  const [openCalendar, setOpenCalendar] = useState<boolean>(false);
  const handleOnPress = () => setOpenCalendar(!openCalendar);

  return (
    <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
      <Container>
        {/* CONTACT FORM */}
        <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
          style={mobile ? styles.mobFormWrap : styles.webFormWrap}
        >
          <Text style={mobile ? styles.mobH1 : styles.webH1}>Book a Service</Text>

          {/* USER FORM */}
          <View style={mobile ? styles.mobForm : styles.webForm}>
            <Form
              inputs={inputs}
              handleChange={handleChange}
              mobile={mobile}
              handleSubmit={handleSubmit}
            />
          </View>

          {/* RADIO BUTTONS FORM */}
          <View style={mobile ? styles.mobRadioBtnForm : styles.webRadioBtnForm}>
            {/* PET TYPE */}
            <View style={mobile ? styles.mobRadioBtnFormWrap : styles.webRadioBtnFormWrap}>
              <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Pet:</Text>
              <RadioButton
                options={petTypeOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
            </View>

            {/* SERVICES SECTION */}
            <Text style={mobile ? styles.mobFormLabel  : styles.webFormLabel }>Services:</Text>
            <View style={mobile ? styles.mobServices : styles.webServices}>
              <Text style={mobile ? styles.mobH2 : styles.webH2}>Overnight Boarding</Text>
              <RadioButton
                options={boardingOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
              <Divider orientation='horizontal' />

              <Text style={mobile ? styles.mobH2 : styles.webH2}>Daycare</Text>
              <RadioButton
                options={daycareOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
              <Divider orientation='horizontal' />

              <Text style={mobile ? styles.mobH2 : styles.webH2}>Grooming</Text>
              <RadioButton
                options={groomingOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
              <Divider orientation='horizontal' />
  
              {/* IF CAT IS SELECTED, HIDE TRAINING SECTION */}
              <Text style={mobile ? styles.mobH2 : styles.webH2}>Training</Text>
              <RadioButton
                options={trainingOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
            </View>
            
            {/* SPECIAL NEEDS SECTION */}
            <View style={mobile ? styles.mobRadioBtnFormWrap : styles.webRadioBtnFormWrap}>
              <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Special Needs:</Text>
              <RadioButton
                options={specialNeedsOptions}
                selectedOption={selectedValue}
                onSelect={value => setSelectedValue(value)}
              />
            </View>

            {/* DATE & CALENDAR SECTION */}
            <View style={mobile ? styles.mobRadioBtnFormWrap : styles.webRadioBtnFormWrap}>
              <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Date:</Text>
              <TouchableOpacity onPress={handleOnPress}>
                <View style={styles.calendar}>
                  <MaterialCommunityIcons name="calendar-month" size={27} color={colors.grey} style={styles.calendarIcon} />
                  <Divider orientation='vertical' />
                  <View>
                    <Text style={styles.date}>01/01/2024</Text>
                  </View>
                </View>
              </TouchableOpacity>

              {openCalendar && (
                <Calendar
                  onDayPress={(day) => console.log(day)}
                  monthFormat={'MMM yyyy'}
                  hideExtraDays={true}
                  disableMonthChange={false}
                  firstDay={1}
                  onPressArrowLeft={subtractMonth => subtractMonth()}
                  onPressArrowRight={addMonth => addMonth()}
                  style={styles.calendarDropdown}
                  theme={{
                    backgroundColor: '#F3F0F7',
                    calendarBackground: '#F3F0F7',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e'
                  }}
                />
              )}
            </View>
          </View>

          {/* SUBMIT BUTTON */}
          <View style={mobile ? styles.mobSubmitBtn : styles.webSubmitBtn}>
            <BtnDark value='Submit' onPress={handleSubmit} />
          </View>
        </KeyboardAvoidingView>      
      </Container>
    </View>
  );
};

export default BookAService;