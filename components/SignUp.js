import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native';

export default function CadastroEstagio1({onRegister}) {

   const [primeiroNome, setPrimeiroNome] = useState('');
   const [ultimoNome, setUltimoNome] = useState('');
   const [celular, setCelular] = useState('');
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [cpf, setCpf] = useState('');

  return (
    <View style={styles.container}>
      
      <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', width: 300, marginBottom: 30, marginTop: 70}}>
        <Text style={{ color: 'white'}}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>

        <TextInput
          style={styles.input}
          placeholder="Digite seu Primeiro nome"
          value={primeiroNome}
          onChangeText={setPrimeiroNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu Último nome"
          value={ultimoNome}
          onChangeText={setUltimoNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu celular"
          required={true}
          keyboardType="numeric"
          value={celular}
          onChangeText={setCelular}

        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu cpf"
          value={cpf}
          onChangeText={setCpf}
        />

        <TouchableOpacity 
        onPress={() => onRegister(primeiroNome, ultimoNome, celular, email, senha, cpf)}
        
        >

        <Text 
          style={{width:100, height: 40, backgroundColor:'purple', marginTop: 40, marginLeft: 160, 
          justifyContent: 'center', alignContent: 'center', alignItems:'center', borderRadius:10}}>
            Cadastrar    
        </Text>
        </TouchableOpacity>

        {/* <View style={{flex: 1, flexDirection: 'row', marginTop: 50}}>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'purple', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
           <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40, marginRight: 15}}></View>
          <View style={{width:30, height:30, borderRadius: 50, backgroundColor: 'gray', marginBottom: 40}}></View>
        </View> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',

  }, 
  input:{
    marginBottom: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 3

  }
});