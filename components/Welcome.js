import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import Header from './Header';

export default function Welcome({ user, onLogout }) {
  return (
    <View>
      <Header>Logado</Header>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.text}>Bem vindo, {user.primeiroNome}</Text>
        <TouchableOpacity onPress={onLogout}>
          <Text style={styles.button}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 30,
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
});