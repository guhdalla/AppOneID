import React , {useState, useEffect} from 'react-native';
import { Text, Image, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import ButtonOneID from '../ButtonOneID';

export default function CadastroDecisao({ setDecisao }) {
  

  return (
    
    
    <View style={styles.container}>
    
    

    <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>

    <View style={styles.pessoaFisica}>
    <Image
    source={require("./vator-pessoa-curtindo.jpg")}
    style={{width:120, height: 120}}
    />
    <ButtonOneID title="Pessoa Fisica" onPress={() => setDecisao(1)}/>
    </View>
    
    </View>
    
    <View style={{flex:0.5, justifyContent:'center', alignItems:'center'}}>

    <View style={styles.pessoaJuridica}>
      <Image
    source={require("./4045060.jpg")}
    style={{width:120, height: 120}}
    />
            <ButtonOneID title="Pessoa Juridica" onPress={() => setDecisao(2)}/>

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
    flexDirection:'row'
  },
  pessoaFisica:{
    flex:0.5,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  },
  pessoaJuridica:{
    flex:0.5,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center'
  }
});
