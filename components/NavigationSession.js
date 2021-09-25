import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/Login';
import CadastroTabs from './Cadastro/CadastroTabs';

const Stack = createNativeStackNavigator();

export default function NavigationSession() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#151515',
                    },
                    headerTintColor: 'white',
                    headerTitleStyle: {
                        fontSize: 22,
                        fontWeight: "bold"
                    }
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: "Login" }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={CadastroTabs}
                    options={{
                        title: 'Cadastrar Usuario',
                        headerShown: true,
                    }}
                />
            </Stack.Navigator>
            <StatusBar barStyle="default" />
        </NavigationContainer>
    );
}