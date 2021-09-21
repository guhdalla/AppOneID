import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ButtonOneID({ title, onPress, style }) {
    return (
        <TouchableOpacity
            style={style == 'green'? styles.buttonGreen : styles.button}
            onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 300,
        height: 45,
        backgroundColor: '#78308C',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonGreen: {
        width: 300,
        height: 45,
        backgroundColor: 'green',
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
})