import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import ButtonOneID from '../ButtonOneID';

export default function CadastroDecisao({ setDecisao }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>

        <View style={styles.pessoaFisica}>
          <Image
            source={require("../../assets/pf.jpg")}
            style={{ width: 120, height: 120 }}
          />
          <ButtonOneID title="Pessoa Fisica" onPress={() => setDecisao(1)} />
        </View>

      </View>

      <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>

        <View style={styles.pessoaJuridica}>
          <Image
            source={require("../../assets/pj.jpg")}
            style={{ width: 120, height: 120 }}
          />
          <ButtonOneID title="Pessoa Juridica" onPress={() => setDecisao(2)} />

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  pessoaFisica:{
    flex:0.5,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
  },
  pessoaJuridica:{
    flex:0.5,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  }
});
