import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import InputOneID from '../InputOneID';
import MaskCellPhone from '../MaskCellPhone';

export default function Cadastro({setFirtName, setLastName, setCelular, celular, setEmail, setSenha, celular}) {
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>

      <InputOneID title="Digite seu Primeiro nome" onChange={setFirtName}/>
      <InputOneID title="Digite seu Último nome" onChange={setLastName}/>
      {/* <InputOneID title="Digite seu celular" onChange={setCelular}/> */}
      <MaskCellPhone title="Digite seu celular" onChange={setCelular} value={celular} keyboardType="numeric"/>
      <InputOneID title="Digite seu E-mail" onChange={setEmail}/>
      <InputOneID title="Digite sua senha" onChange={setSenha} secure={true} keyboardType="numeric"/>

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
