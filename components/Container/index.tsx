import React from 'react';
import { Platform, View } from 'react-native';
import styles from '../../utils/constants';

type ContainerProps = {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {

  return (
    <View style={[ styles.container, Platform.OS === 'web' && styles.webContainer ]}>
      {children}
    </View>
  )
}

export default Container