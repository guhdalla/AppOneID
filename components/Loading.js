import React from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.messageContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        margin: 20
      },
})