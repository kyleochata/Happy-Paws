import React from 'react'
import { View } from 'react-native';

type ContainerProps = {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <View>
      {children}
    </View>
  );
};

export default Container;