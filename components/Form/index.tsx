import { View, Text, TextInput } from 'react-native';
import styles from './style';

interface Input {
  name: string;
  label: string;
  value: string;
  multiline?: boolean;
}

interface FormProps {
  inputs: Input[];
  handleChange: (name: string, value: string) => void;
  handleSubmit: () => void;
  mobile: boolean;
}

const Form = ({ inputs, handleChange, mobile }: FormProps) => {

  return (
    <>
      {inputs.map((input) => (
        <>
          <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>{input.label}</Text>
          <TextInput
            style={[mobile ? styles.mobInput : styles.webInput, input.multiline && { height: 100 }]}
            onChangeText={(value) => handleChange(input.name, value)}
            value={input.value}
            multiline={input.multiline}
          />
        </>
      ))}

      {/* <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Email</Text>
      <TextInput
        style={mobile ? styles.mobInput : styles.webInput}
        onChangeText={(value) => handleChange(input.name, value)}
        inputMode='email'
        value={input.email}
      />

      <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Phone Number</Text>
      <TextInput
        style={mobile ? styles.mobInput : styles.webInput}
        onChangeText={(value) => setFormData({...formData, phone: value})}
        inputMode='tel'
        value={formData.phone}
      />
      <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>Message</Text>
      <TextInput
        style={mobile ? styles.mobTextArea : styles.webTextArea}
        onChangeText={(value) => setFormData({...formData, message: value})}
        multiline
        numberOfLines={4}
        value={formData.message}
      /> */}

    </>
  );
};

export default Form;