import React, { useState } from 'react';
import { Platform, View, Text, KeyboardAvoidingView, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
  const { formData, inputs, handleChange, handleSubmit } = useServiceForm();

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
  
  const handleFormSubmit = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    };

    // Other form submission logic
    handleSubmit();
    Alert.alert('Success', 'Form submitted successfully!');
  };

  const renderServicesSection = () => (
    <>
      <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Services:</Text>
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
    </>
  );

  return (
    <View style={mobile ? styles.mobWrapper : styles.webWrapper}>
      <Container>
        <KeyboardAvoidingView
          behavior='padding'
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
          style={mobile ? styles.mobFormWrap : styles.webFormWrap}
        >
          <Text style={mobile ? styles.mobH1 : styles.webH1}>Book a Service</Text>

          {mobile ? (
            <>
              {/* RADIO BUTTONS FORM */}
              <View style={styles.mobRadioBtnForm}>
                {/* PET TYPE */}
                <View style={styles.mobRadioBtnFormWrap}>
                  <Text style={styles.mobFormLabel}>Pet:</Text>
                  <RadioButtonGroup
                    label='Pet:'
                    options={petTypeOptions}
                    selectedOption={selectedPetType}
                    onSelect={value => setSelectedPetType(value)}
                  />
                </View>

                {renderServicesSection()}

                {/* SPECIAL NEEDS SECTION */}
                <View style={styles.mobRadioBtnFormWrap}>
                  <Text style={styles.mobFormLabel}>Special Needs:</Text>
                  <RadioButtonGroup
                    label='Special Needs:'
                    options={specialNeedsOptions}
                    selectedOption={selectedSpNeeds}
                    onSelect={value => setSelectedSpNeeds(value)}
                  />
                </View>

                {/* DATE & CALENDAR SECTION */}
                <View style={styles.mobDateWrap}>
                  {selectedBoardingOption ? (
                    <Text style={styles.mobFormLabel}>Dates:</Text>
                  ) : (
                    <Text style={styles.mobFormLabel}>Date:</Text>
                  )}
                  {selectedBoardingOption ? (
                    <View style={styles.dateRangeWrapper}>
                      <CalendarDropdown />
                      <AntDesign name='minus' size={24} color='black' />
                      <CalendarDropdown />
                    </View>
                  ) : (
                    <CalendarDropdown />
                  )}
                </View>
              </View>

              {/* USER FORM */}
              <View style={styles.mobForm}>
                <Form
                  inputs={inputs}
                  handleChange={handleChange}
                  mobile={mobile}
                  handleSubmit={handleFormSubmit}
                />
              </View>
            </>
          ) : (
            <>
              {/* !! DESKTOP VIEW USER FORM !! */}
              <View style={styles.webForm}>
                <Form
                  inputs={inputs}
                  handleChange={handleChange}
                  mobile={mobile}
                  handleSubmit={handleFormSubmit}
                />
              </View>

              {/* RADIO BUTTONS FORM */}
              <View style={styles.webRadioBtnForm}>
                {/* PET TYPE */}
                <View style={styles.webRadioBtnFormWrap}>
                  <Text style={styles.webFormLabel}>Pet:</Text>
                  <RadioButtonGroup
                    label='Pet:'
                    options={petTypeOptions}
                    selectedOption={selectedPetType}
                    onSelect={value => setSelectedPetType(value)}
                  />
                </View>

                {renderServicesSection()}

                {/* SPECIAL NEEDS SECTION */}
                <View style={styles.webRadioBtnFormWrap}>
                  <Text style={styles.webFormLabel}>Special Needs:</Text>
                  <RadioButtonGroup
                    label='Special Needs:'
                    options={specialNeedsOptions}
                    selectedOption={selectedSpNeeds}
                    onSelect={value => setSelectedSpNeeds(value)}
                  />
                </View>

                {/* DATE & CALENDAR SECTION */}
                <View style={styles.webRadioBtnFormWrap}>
                  {selectedBoardingOption ? (
                    <Text style={styles.webFormLabel}>Dates:</Text>
                  ) : (
                    <Text style={styles.webFormLabel}>Date:</Text>
                  )}
                  {selectedBoardingOption ? (
                    <View style={styles.dateRangeWrapper}>
                      <CalendarDropdown />
                      <AntDesign name='minus' size={24} color='black' />
                      <CalendarDropdown />
                    </View>
                  ) : (
                    <CalendarDropdown />
                  )}
                </View>
              </View>
            </>
          )}

          {/* SUBMIT BUTTON */}
          <View style={mobile ? styles.mobSubmitBtn : styles.webSubmitBtn}>
            <SubmitButton value='Submit' onPress={handleFormSubmit} />
          </View>
        </KeyboardAvoidingView>
      </Container>
    </View>
  );
};

export default BookAService;