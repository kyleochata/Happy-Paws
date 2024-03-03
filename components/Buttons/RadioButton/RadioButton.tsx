import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './style';

export interface RadioOption {
  label: string;
  value: string;
};

interface RadioButtonProps {
  options: RadioOption[];
  selectedOption: string;
  onSelect: (value: string) => void;
};

const RadioButton = ({ options, selectedOption, onSelect }: RadioButtonProps) => {
  return (
    <View style={styles.container}>
      {options.map(option => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioButton}
          onPress={() => onSelect(option.value)}
        >
          <View style={[styles.radioOuter, option.value === selectedOption && styles.radioSelected]}>
            {option.value === selectedOption && <View style={styles.radioInner} />}
          </View>
          <Text style={styles.radioLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RadioButton;