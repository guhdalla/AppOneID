import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { UserContext } from '../../context/UserContext';
import { login } from '../../util/api/log/in/LoginAPI';
import ButtonOneID from '../ButtonOneID';
import ButtonTextOneID from '../ButtonTextOneID';
import InputOneID from '../InputOneID';
import Loading from '../Loading';
import LogoOneID from '../LogoOneID';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setLoading] = useState(false);

  const context = useContext(UserContext);

  const isLogged = async () => {
    setLoading(true);
    const user = await login(email, senha)
    if (user != null) {
      context.setUserData(user);
      navigation.navigate("Navbar");
    }
    console.log(user)
    setLoading(false);
  }

  useEffect(() => {
    context.setUserData(null);
  }, []);
  return (
    <View style={styles.container}>

      <LogoOneID />
      <InputOneID title="Digite seu email" onChange={setEmail} />
      <InputOneID title="Digite sua senha" secure={true} onChange={setSenha} />

      {!isLoading &&
        <ButtonOneID title="Login" onPress={() => isLogged()} />
      }
      {isLoading &&
        <Loading />
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
