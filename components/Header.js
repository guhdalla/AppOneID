import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Header({ children }) {
  return (
    <Text style={styles.text}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    height: 35,
    backgroundColor: 'steelblue',
    marginBottom: 30,
    alignSelf: 'stretch',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
});