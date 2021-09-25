import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function InputOneID({ title, value, onChange, secure, keyboardType}) {
    return (
       
        <TextInput
            style={styles.input}
            placeholder={title}
            secureTextEntry={secure}
            onChangeText={onChange}
            value={value}
            keyboardType={keyboardType} 
        />

    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 20,
        padding: 10,
        width: 300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3

    },
})