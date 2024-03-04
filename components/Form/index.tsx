import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import styles from './style';
import { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton';

export interface Input {
  name: string
  label: string
  value: string
  multiline?: boolean
  numberOfLines?: number
};

interface FormProps {
  formData: any;
  inputs: Input[];
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
  mobile: boolean;
};

const Form = ({ formData, inputs, handleChange, handleSubmit, mobile }: FormProps) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFormSubmit = () => {
    // Email validation
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Invalid Email', 'Please enter a valid email address.');
      return;
    }
      handleSubmit();
      setShowSuccessModal(true);
  };
  
  return (
    <>
      {showSuccessModal && (
        <View>
          <Modal visible={showSuccessModal} animationType="slide" transparent>
            <View>
              <Text>Form submitted successfully!</Text>
              <TouchableOpacity onPress={() => setShowSuccessModal(false)}>
                <Text>Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      )}
      {inputs.map((input, i) => (
        <>
          <Text key={i} style={mobile ? styles.mobFormLabel : styles.webFormLabel}>{input.label}</Text>
          <TextInput
            key={input.name}
            style={[mobile ? styles.mobInput : styles.webInput, input.multiline && (mobile ? styles.mobTextArea : styles.webTextArea)]}
            onChangeText={(value) => handleChange(input.name, value)}
            value={input.value}
            multiline={input.multiline}
            numberOfLines={input.numberOfLines}
          />
        </>
      ))}

      <View style={mobile ? styles.mobSubmitBtn : styles.webSubmitBtn}>
        <TouchableOpacity onPress={handleFormSubmit}>
          <SubmitButton value='Submit' />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Form
