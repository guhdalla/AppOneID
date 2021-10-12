import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Loading({ color }) {
  return (
    <View style={styles.messageContainer}>
      <ActivityIndicator size="large" color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    margin: 20
  },
})