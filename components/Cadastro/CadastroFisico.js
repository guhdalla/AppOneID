import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getAllUsuarioFisico } from '../../util/api/usuario/fisico/UsuarioFisicoAPI';
import ButtonOneID from '../ButtonOneID';
import InputOneID from '../InputOneID';

// You can import from local files

// or any pure javascript modules available in npm

export function CadastroCPF({ setCPF, cadastrar }) {
    return (
        <View style={styles.container}>

            <View style={styles.containerText}>
                <Text style={styles.text}>Insira o seu CPF e finalize o cadastro.</Text>
            </View>

            <InputOneID title="CPF" onChange={setCPF} />
            <View style={styles.containerButton}>
                <ButtonOneID title="Cadastrar" onPress={() => cadastrar()} />
                <ButtonOneID title="Get" onPress={() => getAllUsuarioFisico()} />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000001',
    },
    containerButton: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 80
    },
    containerText: {
        width: 300,
        marginBottom: 30,
        marginTop: 70
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
});
