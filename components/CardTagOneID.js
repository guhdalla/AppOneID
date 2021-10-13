import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { _bgCotent, _bgSesion, _detail, _textCotent, _textSession, _true } from '../styles/colors';
import ButtonOneID from './ButtonOneID';
import LogoOneID from './LogoOneID';

export default function CardTagOneID({ item, onAlteraStatus}) {
    const [isEnabled, setIsEnabled] = useState(item.numeroStatus == 1? true : false);
    const toggleSwitch = () => [setIsEnabled(previousState => !previousState), onAlteraStatus(item.codigoPin, item.numeroStatus == 1? 2 : 1)];
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.containerRow}>
                <View style={styles.image}>
                    <LogoOneID size="pequeno" />
                </View>

                <Icon name="radio" color={_textCotent} size={25} style={styles.icon} />
                <Switch
                    trackColor={{ false: "#767577", true: _detail }}
                    thumbColor={isEnabled ? _true : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <View style={styles.containerBody}>
                <Text style={styles.textH2}>{item.codigoTag}</Text>
                <Pressable onPress={() => setModalVisible(true)} style={styles.icon} >
                    <Icon name="lock" color={_textCotent} size={20} />
                </Pressable>
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
                            <Text style={styles.textH1}>Tem certeza que deseja bloquear a tag?</Text>
                            <Text style={styles.textH3}>Apos o bloqueio a tag ficara indisponivel para uso por periodo indeterminado</Text>
                            <ButtonOneID title="Confirmar" onPress={() => onAlteraStatus(item.codigoPin, 3)}/>
                        </View>
                    </View>
                </Modal>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 20,
        backgroundColor: _detail,
        borderRadius: 20,
        height: 120,
        width: 250
    },
    containerBody: {
        paddingLeft: 20,
        paddingBottom: 15,
        flex: 1,
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    textH1: {
        fontSize: 20,
        color: _textCotent,
        textAlign: 'center',
        padding: 30,
    },
    textH2: {
        flex: 0.8,
        color: _textCotent
    },
    icon: {
        marginLeft: 50,
        flex: 0.2,
    },
    image: {
        flex: 0.8,
    },
    containerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textH3: {
        fontSize: 16,
        color: _textCotent,
        textAlign: 'center',
        padding: 20,
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