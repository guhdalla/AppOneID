import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ButtonOneID({ title, onPress }) {
    return (
        <TouchableOpacity
            style={styles.bottom}
            onPress={onPress}>
            <Text style={styles.botaoText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    bottom: {
        width: 300,
        height: 45,
        backgroundColor: '#78308C',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
})