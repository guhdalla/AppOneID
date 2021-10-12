import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TokenContext, UserContext } from '../../context/UserContext';
import { _textSession } from '../../styles/colors';
import { login } from '../../util/api/log/in/LoginAPI';
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

  const userContext = useContext(UserContext);
  const tokenContext = useContext(TokenContext);

  const isLogged = async () => {
    setLoading(true);
    setInvalid(false);
    const token = await login(email, senha)
    
    if (token != null) {
      tokenContext.setToken("Bearer " + token);
      navigation.navigate("Navbar");
    } else {
      setInvalid(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    userContext.setUserData(null);
    tokenContext.setToken(null);
  }, []);
  return (
    <View style={styles.container}>

      <LogoOneID />
      {isInvalid &&
        <AlertOneID message="Login Invalido!" type="invalid"/>
      }
      <InputOneID title="Digite seu email" onChange={setEmail} />
      <InputOneID title="Digite sua senha" secure={true} onChange={setSenha} />

      {!isLoading &&
        <ButtonOneID title="Login" onPress={() => isLogged()} />
      }
      {isLoading &&
        <Loading color={_textSession} />
      }
      <ButtonTextOneID title="Cagastre-se" onPress={() => navigation.navigate("Cadastro")} />
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
