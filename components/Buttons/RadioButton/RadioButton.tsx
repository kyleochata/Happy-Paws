import { Platform, View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

export interface RadioOption {
  label: string;
  value: string;
};

interface RadioButtonProps {
  label?: string;
  value: string;
  selected?: boolean,
  onSelect: (value: string) => void;
};

const RadioButton = ({ label, value, selected, onSelect }: RadioButtonProps) => {
  const mobile = Platform.OS !== 'web';

  return (
    <View>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => onSelect(value)}
      >
        <View style={[styles.radioOuter, selected && styles.radioSelected]}>
          {selected && <View style={styles.radioInner} />}
        </View>
        <Text style={mobile ? styles.mobRadioLabel : styles.webRadioLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;