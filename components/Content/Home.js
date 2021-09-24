import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, StatusBar, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { UserContext } from '../../context/UserContext';
import { _bgCotent, _text, _textCotent, _textSession } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import { LineChart } from 'react-native-chart-kit';
import Swiper from 'react-native-swiper';


const Tab = createBottomTabNavigator();

export default function Home() {
    const screenWidth = Dimensions.get("window").width;
    const [eye, setEye] = useState(false);
    const context = useContext(UserContext);

    return (
        <View style={styles.container}>
            <View style={styles.containerRowPad}>
                <View style={styles.containerWelcome}>
                    <Text style={styles.textH1}>Olá,</Text>
                    <Text style={styles.textH1}>Gustavo</Text>
                </View>
                <View style={styles.containerFoto}>
                    <Image
                        style={styles.fotoPerfil}
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/61202563?v=4',
                        }} />
                </View>
            </View>
            <TouchableOpacity style={styles.containerRowPad}>
                <TouchableOpacity
                    onPress={() => { eye ? setEye(false) : setEye(true) }}
                    style={styles.containerIcon}
                >
                    <Icon name={eye ? "eye" : "eye-off"} color={_textCotent} size={30} />
                </TouchableOpacity>
                <View style={styles.containerConta}>
                    <Text style={styles.textH3}>Conta</Text>
                    <Text style={styles.textH2}>R$ {eye ? "1.358,23" : "*****"}</Text>
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
                <FlatList
                
                />
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
});