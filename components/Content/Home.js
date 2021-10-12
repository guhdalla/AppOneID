import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, FlatList, Modal, Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TokenContext, UserContext } from '../../context/UserContext';
import { _bgCotent, _text, _textCotent, _textSession } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import { LineChart } from 'react-native-chart-kit';
import { alterarStatusTag, getAllTagsForUser, vincularTag } from '../../util/api/tag/TagAPI';
import Loading from '../Loading';
import InputOneID from '../InputOneID';
import ButtonOneID from '../ButtonOneID';
import CardTagOneID from '../CardTagOneID';

const Tab = createBottomTabNavigator();



export default function Home({ navigation }) {
    const screenWidth = Dimensions.get("window").width;
    const [tagData, setTagData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [pin, setPin] = useState(null);
    const [eye, setEye] = useState(false);

    const userContext = useContext(UserContext);
    const tokenContext = useContext(TokenContext);

    const getTags = async () => {
        setLoading(true);
        setTagData(await getAllTagsForUser(userContext.userData.idUsuario));
        setLoading(false);
    }

    const getUsuario = async () => {
        userContext.setUserData(await getUser);
    }

    const cadatrarTag = async () => {
        setLoading(true);
        if (pin == null) {
            setPin(null);
            setLoading(false);
            return;
        }
        await vincularTag(userContext.userData.idUsuario, pin);
        setLoading(false);
        setPin(null);
        setModalVisible(!modalVisible)
        getTags();
    }

    const alteraStatusTag = async (codigoPin, status) => {
        await alterarStatusTag(codigoPin, status);
        getTags();
    }

    useEffect(() => {
        getTags();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.containerRowPad}>
                <View style={styles.containerWelcome}>
                    <Text style={styles.textH1}>Olá,</Text>
                    <Text style={styles.textH1}>{userContext.userData.primeiroNome}</Text>
                </View>
                <View style={styles.containerFoto}>
                    <Image
                        style={styles.fotoPerfil}
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/61202563?v=4',
                        }} />
                </View>
            </View>
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
                    <Text style={styles.textH2}>R$ {eye ? userContext.userData.carteira.saldo : "*****"}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name="chevron-right" color={_textCotent} size={20} />
                </View>
            </TouchableOpacity>
            <View style={styles.containerGrafico}>
                <LineChart
                    data={{
                        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    withDots={false}
                    withShadow={true}
                    withInnerLines={false}
                    withOuterLines={false}
                    withVerticalLines={false}
                    withHorizontalLines={false}
                    withVerticalLabels={true}
                    withHorizontalLabels={false}
                    fromZero={false}

                    width={screenWidth}
                    height={400}
                    chartConfig={{
                        backgroundColor: _bgCotent,
                        backgroundGradientFrom: _bgCotent,
                        backgroundGradientTo: _bgCotent,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(0, 0, 0)`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,

                    }}
                    bezier
                />
            </View>
            <View>
                {isLoading && <Loading color={_textCotent} />}
                {!isLoading &&
                    <>
                        <View style={[styles.containerRow, styles.containerTag]}>
                            <Text style={styles.textH2}>Suas tags OneID.</Text>
                            <Pressable onPress={() => setModalVisible(true)} >
                                <Icon name="plus-circle" color={_textCotent} size={25} />
                            </Pressable>
                            <Modal
                                style={styles.modal}
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
                                        <Text style={styles.textH2}>Insira o pin da tag para vincular com voce</Text>
                                        <InputOneID title="Pin" onChange={setPin} />
                                        <ButtonOneID title="Vincular" onPress={() => cadatrarTag()} />
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <FlatList
                            horizontal
                            data={tagData}
                            keyExtractor={item => item.idTag.toString()}
                            renderItem={({ item }) => (
                                <>
                                    {item.numeroStatus != 0 && item.numeroStatus != 3 ?
                                        <CardTagOneID
                                            item={item}
                                            onAlteraStatus={alteraStatusTag}
                                        /> : null}
                                </>
                            )}
                        />
                    </>
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
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 20,
    },
    containerFoto: {
        flex: 0.2,
        alignItems: 'flex-end',
    },
    textH1: {
        color: _textCotent,
        fontSize: 20,
    },
    containerRowPad: {
        padding: 15,
        flexDirection: 'row',
    },
    containerRow: {
        flexDirection: 'row',
    },
    containerWelcome: {
        flex: 0.8,
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
    containerIcon: {
        padding: 15,
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    containerGrafico: {
        alignItems: 'center',
    },
    containerTag: {
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-around',
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
});