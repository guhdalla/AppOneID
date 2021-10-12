import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function LogoOneID({ size }) {
  return (
    <Image
      source={require('../assets/logo.png')}
      style={size == 'grande' ? styles.grande : size == 'pequeno' ? styles.pequeno : styles.grande}
    />
  );
}

const styles = StyleSheet.create({
  grande: {
    width: 300,
    height: 50,
    marginBottom: 100
  },
  pequeno: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
});