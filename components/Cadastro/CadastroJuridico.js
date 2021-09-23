import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ButtonOneID from '../ButtonOneID';
import InputOneID from '../InputOneID';

// You can import from local files

// or any pure javascript modules available in npm

export function CadastroEmpresa({ setNomeFantasia, setCNPJ, setRazaoSocial }) {
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Para criar sua conta basta preencher com seus dados pessoais, pode ficar tranquilo que seus dados estão seguros :)</Text>
      </View>

      <InputOneID title="Nome fantasia" onChange={setNomeFantasia} />
      <InputOneID title="CNPJ" onChange={setCNPJ} />
      <InputOneID title="Razão social" onChange={setRazaoSocial} />

    </View>
  );
}

export function CadastroEndereco({ setCEP, setRua, setNumero, setBairro, setCidade, setUF, setComplemento }) {
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Preencha os dados do endereço de sua empresa.</Text>
      </View>

      <InputOneID title="CEP" onChange={setCEP} />
      <InputOneID title="Rua" onChange={setRua} />
      <InputOneID title="Numero" onChange={setNumero} />
      <InputOneID title="Bairro" onChange={setBairro} />
      <InputOneID title="Cidade" onChange={setCidade} />
      <InputOneID title="UF" onChange={setUF} />
      <InputOneID title="Complemento" onChange={setComplemento} />

    </View>
  );
}

export function CadastroServicos({ authenticateID, entranceID, setEntranceID, setAuthenticateID, cadastrar }) {
  return (
    <View style={styles.container}>

      <View style={styles.containerText}>
        <Text style={styles.text}>Quais dispositivos vai de encontro com sua necessidade ?</Text>
      </View>

      <View style={styles.containerCard}>

        <Text style={styles.titleCard}>AuthenticateID</Text>

        <Text style={styles.bodyCard}>
          Permita aos clientes ou seus funcionários realizarem pagamentos através de nossa tecnologia, consuma nossa a api e adicione em seu sistema para usar.
        </Text>


        <ButtonOneID title={authenticateID ? "AuthenticateID Adicionado" : "Adicionar AuthenticateID"}
          onPress={() => { authenticateID ? setAuthenticateID(false) : setAuthenticateID(true) }}
          style={authenticateID ? "green" : "default"}
        />

      </View>

      <View style={styles.containerCard}>

        <Text style={styles.titleCard}>EntranceID</Text>

        <Text style={styles.bodyCard}>
          Controle o acesso de seu estabelecimento ou evento através de nosso dispositivo acompanhado com uma interface web mostrando um dashboard com todas atividades.
        </Text>

        <ButtonOneID title={entranceID ? "EntranceID Adicionado" : "Adicionar EntranceID"}
          onPress={() => { entranceID ? setEntranceID(false) : setEntranceID(true) }}
          style={entranceID ? "green" : "default"}
        />
      </View>

      <ButtonOneID title="Cadastrar" onPress={() => cadastrar()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000001',
    padding: 10,
  },
  containerText: {
    width: 300,
    marginBottom: 30,
    marginTop: 70
  },
  text: {
    color: 'white'
  },
  containerCard: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 15,
  },
  titleCard: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  bodyCard: {
    padding: 10,
    fontSize: 15
  }
});
