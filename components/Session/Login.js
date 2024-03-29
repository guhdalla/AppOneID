import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { TokenContext } from '../../context/TokenContext';
import { UserContext } from '../../context/UserContext';
import { _textSession } from '../../styles/colors';
import { login } from '../../util/api/ApiLoginController';
import { findByToken } from '../../util/api/ApiUsuarioController';
import AlertOneID from '../AlertOneID';
import ButtonOneID from '../ButtonOneID';
import ButtonTextOneID from '../ButtonTextOneID';
import InputOneID from '../InputOneID';
import Loading from '../Loading';
import LogoOneID from '../LogoOneID';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [isInvalid, setInvalid] = useState(false);

  const tokenContext = useContext(TokenContext);
  const userContext = useContext(UserContext);

  const isLogged = async () => {
    setLoading(true);

    const token = await login(email, senha);

    if (token != null) {
      const tokenPrefix = "Bearer " + token;
      tokenContext.setToken(tokenPrefix);
      await getUsuario(tokenPrefix);
    } else {
      setInvalid(true);
    }
    setLoading(false);
  }

  const getUsuario = async (tokenPrefix) => {
    try {
      const usuario = await findByToken(tokenPrefix);
      userContext.setUserData(usuario);
    } catch (error) {
      console.log(error);
      tokenContext.setToken(null);
    }
  }

  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={80}
      style={styles.container}>

      <LogoOneID />
      {isInvalid &&
        <AlertOneID message="Login Invalido!" type="invalid" />
      }
      <InputOneID title="Digite seu email" onChange={setEmail} />
      <InputOneID title="Digite sua senha" secure={true} onChange={setSenha} />

      {!isLoading &&
        <ButtonOneID title="Login" onPress={() => isLogged()} />
      }
      {isLoading &&
        <Loading color={_textSession} />
      }
      <View style={styles.containerButton}>
        <ButtonTextOneID title="Cadastre-se" onPress={() => navigation.navigate("Cadastro")} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000001',
  },
  containerButton: {
    padding: 20
  }
});
