import * as React from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import InputOneID from '../InputOneID';
import MaskCellPhone from '../Mask/MaskCellPhone';
import MaskDate from '../Mask/MaskDate';

export default function CadastroUser({ setPrimeiroNome, setLastName, setCelular, setEmail, setSenha, setDataNascimento }) {
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 64 : 0
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null} keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}>
      <ScrollView>

        <View style={styles.containerText}>
          <Text style={styles.text}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
        </View>

        <InputOneID title="Digite seu Primeiro nome" onChange={setPrimeiroNome} />
        <InputOneID title="Digite seu Último nome" onChange={setLastName} />
        <MaskDate title="Digite sua Data de nascimento" onChange={setDataNascimento} keyboardType="numeric" />
        <MaskCellPhone title="Digite seu celular" onChange={setCelular} keyboardType="numeric" />
        <InputOneID title="Digite seu E-mail" onChange={setEmail} />
        <InputOneID title="Digite sua senha" onChange={setSenha} secure={true} />

      </ScrollView>
    </KeyboardAvoidingView>
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
