import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonOneID from '../ButtonOneID';
import InputOneID from '../InputOneID';

// You can import from local files

// or any pure javascript modules available in npm

export function CadastroEmpresa() {
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>

      <InputOneID title="Nome fantasia" />
      <InputOneID title="CNPJ" />
      <InputOneID title="Razão social" />

    </View>
  );
}

export function CadastroEndereco() {
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Preencha os dados do endereço de sua empresa.</Text>
      </View>

      <InputOneID title="CEP" />
      <InputOneID title="Rua" />
      <InputOneID title="Numero" />
      <InputOneID title="Bairro" />
      <InputOneID title="Cidade" />
      <InputOneID title="UF" />

      <ButtonOneID title="Cadastrar"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000001',
  },
  containerText: {
    width: 300,
    marginBottom: 30,
    marginTop: 70
  },
  text: {
    color: 'white'
  },
});
