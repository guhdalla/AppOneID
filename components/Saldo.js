import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { _bgCotent, _text, _textCotent, _textSession } from '../styles/colors';

export default function Saldo({ navigation, saldo }) {
    const [eye, setEye] = useState(false);
    return (
        <TouchableOpacity style={styles.containerRowPad}
            onPress={() => { navigation.navigate('Conta') }}
        >
            <TouchableOpacity
                onPress={() => { eye ? setEye(false) : setEye(true) }}
                style={styles.containerIcon}
            >
                <Icon name={eye ? "eye" : "eye-off"} color={_textCotent} size={30} />
            </TouchableOpacity>
            <View style={styles.containerConta}>
                <Text style={styles.textH3}>Conta</Text>
                <Text style={styles.textH2}>R$ {eye ? saldo : "*****"}</Text>
            </View>
            <View style={styles.containerIcon}>
                <Icon name="chevron-right" color={_textCotent} size={20} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerRowPad: {
        padding: 15,
        flexDirection: 'row',
    },
    containerIcon: {
        padding: 15,
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    containerConta: {
        padding: 15,
        flex: 0.8,
    },
    textH2: {
        color: _textCotent,
        fontSize: 18,
    },
    textH3: {
        color: _textCotent,
        fontSize: 16,
    },
})