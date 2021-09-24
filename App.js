import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationSession from './components/Session/NavigationSession';


export default function App() {
  return (
    <NavigationSession />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
