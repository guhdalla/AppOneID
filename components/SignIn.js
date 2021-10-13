import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Header from './Header';

export default function SignIn({ onEnter, onSignUp }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Header>Entrar</Header>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => onEnter(email, senha)}>
          <Text style={styles.button}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onSignUp(true)}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    margin: 10
  },
  button: {
    marginTop: 30,
    backgroundColor: 'steelblue',
    padding: 10,
    color: 'white',
    borderRadius: 10,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10
  },
});