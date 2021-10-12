import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ButtonTextOneID({ title, onPress }) {
    return (
        <TouchableOpacity
        style={styles.containerButton}
        onPress={onPress}>
        <Text style={styles.botaoText}>{title}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
})