import { View, Text, TextInput } from 'react-native'
import styles from './style'

export interface Input {
  name: string
  label: string
  value: string
  multiline?: boolean
  numberOfLines?: number
}

interface FormProps {
  inputs: Input[]
  handleChange: (name: string, value: string) => void
  handleSubmit: () => void
  mobile: boolean
}

const Form = ({ inputs, handleChange, mobile }: FormProps) => {
  return (
    <>
      {inputs.map((input) => (
        <>
          <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>
            {input.label}
          </Text>
          <TextInput
            style={[
              mobile ? styles.mobInput : styles.webInput,
              input.multiline &&
                (mobile ? styles.mobTextArea : styles.webTextArea),
            ]}
            onChangeText={(value) => handleChange(input.name, value)}
            value={input.value}
            multiline={input.multiline}
            numberOfLines={input.numberOfLines}
          />
        </>
      ))}
    </>
  )
}

export default Form
