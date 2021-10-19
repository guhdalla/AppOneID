import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function TransacaoFisico({ item }) {
    return (
        <View style={styles.container}>
            <Text>{item.usuarioJuridico.nomeFantasia}</Text>
            <View style={styles.containerRow}>
                <Text style={styles.textData}>{item.dataMovimentacao}</Text>
                <Text style={styles.textValor}>R$ {item.valorTransacao}</Text>
            </View>
        </View>
    );
}

export function TransacaoJuridico({ item }) {
    return (
        <View style={styles.container}>
            <Text>{item.usuarioFisico.primeiroNome} {item.usuarioFisico.sobrenome}</Text>
            <View style={styles.containerRow}>
                <Text style={styles.textData}>{item.dataMovimentacao}</Text>
                <Text style={styles.textValor}>R$ {item.valorTransacao}</Text>
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
        textAlign: 'right',
        marginRight: 20,
        fontSize: 20,
    }
})