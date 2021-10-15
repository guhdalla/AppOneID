import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from './Home';
import Conta from './Conta';
import { UserContext } from '../../context/UserContext';
import { findByToken } from '../../util/api/ApiUsuarioController';
import { TokenContext } from '../../context/TokenContext';

const Tab = createBottomTabNavigator();

export default function Navbar() {
  // const userContext = useContext(UserContext);
  // const tokenContext = useContext(TokenContext);

  // const getUsuario = async () => {
  //   console.log("1");
  //   try {
  //     const usuario = await findByToken(tokenContext.token);
  //     userContext.setUserData(usuario);
  //   } catch (error) {
  //     console.log(error);
  //     tokenContext.setToken(null);
  //   }
  // }

  // useEffect(() => {
  //   getUsuario();
  // }, []);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Meu dispositivo':
              iconName = 'devices';
              break;
            case 'Configurações':
              iconName = 'settings';
              break;
            case 'Conta':
              iconName = 'dollar-sign';
              break;
            case 'Home':
              iconName = 'home';
              break;
            case 'Perfil':
              iconName = 'profile';
              break;
            default:
              iconName = 'add';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />
            ;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Conta" component={Conta} />
      {/* <Tab.Screen name="Dispositivos" component={HomeScreen} />
    <Tab.Screen name="Tag" component={CadastrarTag} />
    <Tab.Screen name="Atividade" component={CadastrarTag} />
    <Tab.Screen name="Perfil" component={PerfilFisico} /> */}
    </Tab.Navigator>
  );
}