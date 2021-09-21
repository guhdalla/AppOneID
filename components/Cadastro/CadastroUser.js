import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import InputOneID from '../InputOneID';

export default function CadastroUser({setFirtName, setLastName, setCelular, setEmail, setSenha, setDataNascimento}) {
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>

      <InputOneID title="Digite seu Primeiro nome" onChange={setFirtName}/>
      <InputOneID title="Digite seu Último nome" onChange={setLastName}/>
      <InputOneID title="Digite sua Data de nascimento" onChange={setDataNascimento}/>
      <InputOneID title="Digite seu celular" onChange={setCelular}/>
      <InputOneID title="Digite seu E-mail" onChange={setEmail}/>
      <InputOneID title="Digite sua senha" onChange={setSenha} secure={true}/>

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
