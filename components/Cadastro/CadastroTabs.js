import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper'

import CadastroUser from './CadastroUser'
import { CadastroEmpresa, CadastroEndereco, CadastroServicos } from './CadastroJuridico';
import CadastroDecisao from './CadastroDecisao';
import { CadastroCPF } from './CadastroFisico';
import { createUsuarioFisico } from '../../util/api/usuario/fisico/UsuarioFisicoAPI';
import { createUsuarioJuridico } from '../../util/api/usuario/juridico/UsuarioJuridicoAPI';

const Tab = createBottomTabNavigator();

export default function CadastroTabs({ route, navigation }) {
    const [decicao, setDecicao] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [celular, setCelular] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [CPF, setCPF] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [CEP, setCEP] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [UF, setUF] = useState('');
    const [authenticateID, setAuthenticateID] = useState(false);
    const [entranceID, setEntranceID] = useState(false);

    const cadastrarFisico = async () => {
        await createUsuarioFisico(firstName, lastName, dataNascimento, email, celular, senha, CPF);
    }

    const cadastrarJuridico = async () => {
        await  createUsuarioJuridico(firstName, lastName, dataNascimento, email, celular, senha, 
            CNPJ, entranceID, authenticateID, nomeFantasia, razaoSocial, bairro, CEP, cidade, complemento, numero, rua, UF);
    }

    return (
        <Swiper showsButtons={false}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            loop={false}
        >
            <CadastroUser
                setFirtName={setFirstName}
                setLastName={setLastName}
                setCelular={setCelular}
                setEmail={setEmail}
                setSenha={setSenha}
                setDataNascimento={setDataNascimento}
            />
            <CadastroDecisao setDesicao={setDecicao} />
            {decicao == 1 &&
                <CadastroCPF setCPF={setCPF} cadastrar={cadastrarFisico} />
            }
            {decicao == 2 &&
                <CadastroEmpresa
                    setNomeFantasia={setNomeFantasia}
                    setCNPJ={setCNPJ}
                    setRazaoSocial={setRazaoSocial}
                />
            }
            {decicao == 2 &&
                <CadastroEndereco
                    setCEP={setCEP}
                    setRua={setRua}
                    setNumero={setNumero}
                    setBairro={setBairro}
                    setCidade={setCidade}
                    setUF={setUF}
                    setComplemento={setComplemento}
                />
            }
            {decicao == 2 &&
                <CadastroServicos
                    authenticateID={authenticateID}
                    entranceID={entranceID}
                    setEntranceID={setEntranceID}
                    setAuthenticateID={setAuthenticateID}
                    cadastrar={cadastrarJuridico}
                />
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
