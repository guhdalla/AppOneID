import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Pressable, Modal, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContext } from '../../context/UserContext';
import Icon from 'react-native-vector-icons/Feather';

import { _bgCotent, _bgSesion, _text, _textCotent, _textSession } from '../../styles/colors';
import ButtonOneID from '../ButtonOneID';
import InputOneID from '../InputOneID';
import { alterarSaldo } from '../../util/api/ApiCarteiraController';
import Loading from '../Loading';
import { TokenContext } from '../../context/TokenContext';
import MaskMoney from '../Mask/MaskMoney';
import { getTransacoes } from '../../util/api/ApiTransacaoController';
import { TransacaoFisico, TransacaoJuridico } from '../TransacaoOneID';

const Tab = createBottomTabNavigator();

export default function Conta(item) {
    const [eye, setEye] = useState(false)
    const [isLoading, setLoading] = useState(false);
    const [isLoadingTransacao, setLoadingTransacao] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [valor, setValor] = useState(0);
    const [transacoes, setTransacoes] = useState([]);

    const userContext = useContext(UserContext);
    const tokenContext = useContext(TokenContext);

    const consultarTransacao = async () => {
        setLoadingTransacao(true);
        setTransacoes(await getTransacoes(tokenContext.token));
        setLoadingTransacao(false);
    }

    const alterarSaldoCarteira = async () => {
        setLoading(true);

        const valorFormatado = parseFloat(valor.toString().slice(2, valor.toString().length));

        if (valorFormatado == 0) {
            setValor(0);
            setLoading(false);
            return;
        }
        const json = await alterarSaldo(userContext.userData.carteira.id, valorFormatado, tokenContext.token);
        if (json == null) return;
        userContext.userData.carteira.saldo = userContext.userData.carteira.saldo + valorFormatado;
        setLoading(false);
        setValor(0);
        setModalVisible(!modalVisible)
    }

    useEffect(() => {
        consultarTransacao();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                {isLoading &&
                    <Loading />
                }
                {!isLoading &&
                    <View style={styles.containerRowPad}>

                        <TouchableOpacity
                            onPress={() => { eye ? setEye(false) : setEye(true) }}
                            style={styles.containerIcon}
                        >
                            <Icon name={eye ? "eye" : "eye-off"} color={_textSession} size={30} />
                        </TouchableOpacity>
                        <View style={styles.containerConta}>
                            <Text style={styles.textH1}>R$ {eye ? userContext.userData.carteira.saldo : "*****"}</Text>
                        </View>
                    </View>
                }
                <View style={styles.iconBar}>
                    <View style={styles.iconComponent} >
                        <Pressable onPress={() => setModalVisible(true)} style={styles.icon} >
                            <Icon name="dollar-sign" color={_textSession} size={40} />
                        </Pressable>
                        <Text style={styles.textH3}>Depositar</Text>
                    </View>
                    <Modal
                        animationType="fade"
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.bgModal}>
                            <View style={styles.containerModalBack}>
                                <Pressable onPress={() => setModalVisible(!modalVisible)} >
                                    <Icon name="arrow-left" color={_textCotent} size={25} />
                                </Pressable>
                            </View>
                            <View style={styles.containerModal}>
                                <Text style={styles.textH3Light}>Digite o valor que deseja depositar</Text>
                                <MaskMoney title="Valor" value={valor} onChange={setValor} keyboardType="numeric" />
                                <ButtonOneID title="Confirmar" onPress={() => alterarSaldoCarteira()} />
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
            <View style={styles.containerTransacoes}>
                {isLoadingTransacao &&
                    <Loading />
                }
                {!isLoadingTransacao &&
                    <FlatList
                        data={transacoes}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => (
                            <>
                                {Object.values(userContext.userData.authorities)[0].authority == "ROLE_FISICO" &&
                                    <TransacaoFisico item={item} />
                                }
                                {Object.values(userContext.userData.authorities)[0].authority == "ROLE_JURIDICO" &&
                                    <TransacaoJuridico item={item} />
                                }

                            </>
                        )}
                    />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: _bgCotent,
    },
    containerTransacoes:{
        flex: 0.6,
    },
    containerHeader: {
        flex: 0.4,
        backgroundColor: _bgSesion,
    },
    containerRowPad: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerIcon: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    containerConta: {
        padding: 15,
    },
    textH1: {
        color: _textSession,
        fontSize: 32,
    },
    textH3: {
        color: _textSession,
        fontSize: 16,
    },
    textH3Light: {
        color: _textCotent,
        fontSize: 16,
    },
    iconBar: {
        padding: 40,
        flexDirection: 'row'
    },
    icon: {
        borderRadius: 100,
        borderColor: _textSession,
        borderWidth: 1,
    },
    iconComponent: {
        alignItems: 'center',
    },
    containerModal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerModalBack: {
        padding: 20
    },
    bgModal: {
        flex: 1,
        backgroundColor: _bgCotent,
    },
})