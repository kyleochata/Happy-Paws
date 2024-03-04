import { useState } from 'react';
import { Platform, View, Text, KeyboardAvoidingView } from 'react-native';

import styles from './style';
import { useServiceForm } from '../../utils/hooks';
import CalendarDropdown from '../CalendarDropdown';
import Container from '../Container';
import Divider from '../Divider';
import Form from '../Form';
import SubmitButton from '../Buttons/SubmitButton';
import { RadioOption } from '../Buttons/RadioButton/RadioButton';
import RadioButtonGroup from '../Buttons/RadioButton/RadioButtonGroup';

const BookAService = () => {
  const mobile = Platform.OS !== 'web';
  const { inputs, handleChange, handleSubmit } = useServiceForm();

  // RADIO BUTTON
  const [selectedPetType, setSelectedPetType] = useState<string>('');
  const petTypeOptions: RadioOption[] = [
    { label: 'Cat', value: 'cat' },
    { label: 'Dog', value: 'dog' },
  ];

  const [selectedBoardingOption, setSelectedBoardingOption] = useState<string>('');
  const boardingOptions: RadioOption[] = [
    { label: 'Standard', value: 'standardBoarding' },
    { label: 'Deluxe', value: 'deluxeBoarding' },
    { label: 'Luxury', value: 'luxuryBoarding' },
  ];

  const [selectedDaycare, setSelectedDaycare] = useState<string>('');
  const daycareOptions: RadioOption[] = [
    { label: 'Basic', value: 'basicDaycare' },
    { label: 'Standard', value: 'standardDaycare' },
    { label: 'Premium', value: 'premiumDaycare' },
  ];

  const [selectedGrooming, setSelectedGrooming] = useState<string>('');
  const groomingOptions: RadioOption[] = [
    { label: 'Basic', value: 'basicGrooming' },
    { label: 'Standard', value: 'standardGrooming' },
    { label: 'Premium', value: 'premiumGrooming' },
  ];

  const [selectedTraining, setSelectedTraining] = useState<string>('');
  const trainingOptions: RadioOption[] = [
    { label: 'Basic', value: 'basicTraining' },
    { label: 'Standard', value: 'standardTraining' },
    { label: 'Premium', value: 'premiumTraining' },
  ];

  const [selectedSpNeeds, setSelectedSpNeeds] = useState<string>('');
  const specialNeedsOptions: RadioOption[] = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  return (
    <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
      <Container>
        {/* v PREVENT KEYBOARD FROM COVERING INPUT BOXES */}
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
              <RadioButtonGroup
                label='Pet:'
                options={petTypeOptions}
                selectedOption={selectedPetType}
                onSelect={value => setSelectedPetType(value)}
              />
            </View>

            {/* SERVICES SECTION */}
            <Text style={mobile ? styles.mobFormLabel  : styles.webFormLabel }>Services:</Text>
            <View style={mobile ? styles.mobServices : styles.webServices}>
              <RadioButtonGroup
                label='Overnight Boarding'
                options={boardingOptions}
                selectedOption={selectedBoardingOption}
                onSelect={value => setSelectedBoardingOption(value)}
              />
              <Divider orientation='horizontal' />
              <RadioButtonGroup
                label='Daycare'
                options={daycareOptions}
                selectedOption={selectedDaycare}
                onSelect={value => setSelectedDaycare(value)}
              />
              <Divider orientation='horizontal' />
              <RadioButtonGroup
                label='Grooming'
                options={groomingOptions}
                selectedOption={selectedGrooming}
                onSelect={value => setSelectedGrooming(value)}
              />
              <Divider orientation='horizontal' />
              {/* IF CAT IS SELECTED, HIDE TRAINING SECTION */}
              {selectedPetType === 'cat' ? '' : (
                <RadioButtonGroup
                  label='Training'
                  options={trainingOptions}
                  selectedOption={selectedTraining}
                  onSelect={value => setSelectedTraining(value)}
                />
              )}
            </View>
            {/* SPECIAL NEEDS SECTION */}
            <View style={mobile ? styles.mobRadioBtnFormWrap : styles.webRadioBtnFormWrap}>
              <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Special Needs:</Text>
                <RadioButtonGroup
                  label='Special Needs:'
                  options={specialNeedsOptions}
                  selectedOption={selectedSpNeeds}
                  onSelect={value => setSelectedSpNeeds(value)}
                />
            </View>

            {/* DATE & CALENDAR SECTION */}
            <View style={mobile ? styles.mobRadioBtnFormWrap : styles.webRadioBtnFormWrap}>
              <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Date:</Text>
              <CalendarDropdown />
            </View>
          </View>

          {/* SUBMIT BUTTON */}
          <View style={mobile ? styles.mobSubmitBtn : styles.webSubmitBtn}>
            <SubmitButton value='Submit' onPress={handleSubmit} />
          </View>
        </KeyboardAvoidingView>      
      </Container>
    </View>
  );
};

export default BookAService;