import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function AppLogo({ size = 120 }: { size?: number }) {
  return (
    <Image
      source={require('../assets/images/logo.png')}
      style={[
        styles.logo,
        { width: 120, height: 60 },
      ]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
  },
});
