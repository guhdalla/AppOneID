import React, { useContext } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TextInput, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { ApiUri } from '../../util/api/ApiConfig';
import { UserContext } from '../../context/UserContext';

export function Perfil() {
    const userContext = useContext(UserContext);


    return (


        < ScrollView >

            <View style={styles.box1}>
                <ImageBackground source={require('../../assets/bgPerfil.jpeg')} resizeMode="cover" style={styles.image}>

                    <Image source={
                        userContext.userData.fotoPerfil == null ?
                            require("../../assets/perfil.jpg") : { uri: `${ApiUri}/api/img/${userContext.userData.idUsuario}.jpg` }
                    }
                        style={styles.imgPerfil}
                    />
                </ImageBackground>
            </View>

            <View style={styles.box2}>

                <TextInput
                    style={styles.input}
                    placeholder={userContext.userData.primeiroNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder={userContext.userData.sobrenome}
                />

                <TextInput
                    style={styles.input}
                    placeholder={userContext.userData.dataNascimento}
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    placeholder={userContext.userData.telefone}
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    placeholder={userContext.userData.email}
                />

                {Object.values(userContext.userData.authorities)[0].authority == "ROLE_JURIDICO" &&
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.nomeFantasia}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.cnpj}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.razaoSocial}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.endereco.cep}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.endereco.rua}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.endereco.numero}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.endereco.bairro}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.endereco.cidade}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.endereco.uf}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.endereco.complemento}
                        />
                    </>
                }

                {Object.values(userContext.userData.authorities)[0].authority == "ROLE_FISICO" &&
                    <>
                        <TextInput
                            style={styles.input}
                            placeholder={userContext.userData.cpf}
                        />
                    </>
                }

            </View>


        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: 'white',
        padding: 0.1,
    },
    box1: {
        height: 150,

    },
    box2: {
        flex: 0.7,
        backgroundColor: 'white',
        padding: 30,
        borderRadius: 20,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    },
    imgPerfil: {
        width: 100,
        height: 100,
        borderRadius: 100
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 30
    }
});
