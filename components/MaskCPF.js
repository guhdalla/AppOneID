import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

// npm install react-native-masked-text --save
import { TextInputMask } from 'react-native-masked-text';

export default function MaskCNPJ({keyboardType, onChange, value, title }) {
    return (
       
      <TextInputMask
      type={'cpf'}
      value={value}
      onChangeText={onChange}
      placeholder={title}
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