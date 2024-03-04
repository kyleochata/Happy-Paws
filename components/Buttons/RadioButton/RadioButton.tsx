import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
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
  return (
    <View>
      <TouchableOpacity
        style={styles.radioButton}
        onPress={() => onSelect(value)}
      >
        <View style={[styles.radioOuter, selected && styles.radioSelected]}>
          {selected && <View style={styles.radioInner} />}
        </View>
        <Text style={styles.radioLabel}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;