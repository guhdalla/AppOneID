import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Home from './Home';
import Conta from './Conta';
import Atividades from './Atividades';

const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Dispositivos':
              iconName = 'devices';
              break;
            case 'Atividades':
              iconName = 'briefcase';
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
      <Tab.Screen name="Atividades" component={Atividades} />
      {/* {Object.values(userContext.userData.authorities)[0].authority == "ROLE_JURIDICO" &&
        <Tab.Screen name="Dispositivos" component={Dispositivo} />
      } */}
      {/* <Tab.Screen name="Perfil" component={Perfil} /> */}
    </Tab.Navigator>
  );
}