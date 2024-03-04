import { Platform, View, Text } from 'react-native';
import styles from './style';
import RadioButton, { RadioOption } from './RadioButton';

interface RadioButtonGroupProps {
  label: string;
  options: RadioOption[];
  selectedOption: string;
  onSelect: (value: string) => void;
};

const RadioButtonGroup = ({ label, options, selectedOption, onSelect }: RadioButtonGroupProps) => {
  const mobile = Platform.OS !== 'web';

  return (
    <View>
      {label === 'Pet:' || 'Special Needs:' ? '' : (
        <Text style={mobile ? styles.mobFormLabel : styles.webFormLabel}>{label}</Text>
      )}
      <View style={styles.container}>
        {options.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            selected={selectedOption === option.value}
            onSelect={onSelect}
          />
        ))}
      </View>
    </View>
  );
};

export default RadioButtonGroup;