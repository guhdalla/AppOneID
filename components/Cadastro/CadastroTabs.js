import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'

import Cadastro from './Cadastro'
import {CadastroEmpresa, CadastroEndereco} from './CadastroJuridico';

import CadastroDecisao from './CadastroDecisao';

const Tab = createBottomTabNavigator();

export default function CadastroTabs({ route, navigation }) {
    const [decicao, setDecicao] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    return (
        <Swiper showsButtons={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
        >
            <Cadastro
                setFirtName={setFirstName}
                setLastName={setLastName}
                setCelular={setCelular}
                setEmail={setEmail}
                setSenha={setSenha}
            />
            <CadastroDecisao setDesicao={setDecicao} />
            {/* {decicao == 1 &&

            } */}
            {decicao == 2 &&
                <CadastroEmpresa />
            }
            {decicao == 2 &&
                <CadastroEndereco />
            }


        </Swiper>
    );
}

const styles = StyleSheet.create({
    dot: {
        backgroundColor: 'rgba(255,255,255,.3)',
        width: 20,
        height: 20,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    },
    activeDot: {
        backgroundColor: '#78308C',
        width: 20,
        height: 20,
        borderRadius: 7,
        marginLeft: 7,
        marginRight: 7
    }
});
