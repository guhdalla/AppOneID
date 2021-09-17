import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import ButtonOneID from './ButtonOneID';
import ButtonTextOneID from './ButtonTextOneID';
import InputOneID from './InputOneID';
import LogoOneID from './LogoOneID';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <LogoOneID/>
      <InputOneID title="Digite seu email"/>
      <InputOneID title="Digite sua senha" secure={true}/>

      <ButtonOneID title="Login"/>
      <ButtonTextOneID title="Cagastre-se" onPress={() => navigation.navigate("Cadastro")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000001',
  },

});
