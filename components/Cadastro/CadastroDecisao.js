import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonOneID from '../ButtonOneID';

export default function CadastroDecisao({ setDesicao }) {
  return (
    <View style={styles.container}>
      <ButtonOneID title="Pessoa Fisica" onPress={() => setDesicao(1)}/>
      <ButtonOneID title="Pessoa Juridica" onPress={() => setDesicao(2)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#212121',
  },
});
