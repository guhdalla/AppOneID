import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';

export default function MaskCellPhone({ keyboardType, onChange, value, title }) {
  return (

    <TextInputMask
      style={styles.input}
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: '(99)'
      }}
      type={'cel-phone'}
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