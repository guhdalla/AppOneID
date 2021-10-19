import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckIn, CheckOut } from './Check';

export function AtividadeFisico({ item }) {
    return (
        <View style={styles.container}>
            <Text>{item.usuarioJuridico.nomeFantasia}</Text>
            <View style={styles.containerRow}>
                <Text style={styles.textData}>{item.dtCheck}</Text>
                <View style={styles.textValor}>
                    {item.nrCheck == 1 ? <CheckIn /> : <CheckOut />}
                </View>
            </View>
        </View>
    );
}

export function AtividadeJuridico({ item }) {
    return (
        <View style={styles.container}>
            <Text>{item.usuarioFisico.primeiroNome} {item.usuarioFisico.sobrenome}</Text>
            <View style={styles.containerRow}>
                <Text style={styles.textData}>{item.dataMovimentacao}</Text>
                <View style={styles.textValor}>
                    {item.nrCheck == 1 ? <CheckIn /> : <CheckOut />}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 0.2,
    },
    containerRow: {
        flexDirection: 'row',
    },
    textData: {
        flex: 0.7,
        textAlignVertical: 'bottom',
    },
    textValor: {
        flex: 0.3,
        marginRight: 20,
        fontSize: 20,
        alignItems: 'flex-end'
    }
})