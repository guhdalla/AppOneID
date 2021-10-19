import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { TokenContext } from '../../context/TokenContext';
import { UserContext } from '../../context/UserContext';
import { _textCotent } from '../../styles/colors';
import { getAtividade } from '../../util/api/ApiAtividadeController';
import { AtividadeFisico, AtividadeJuridico } from '../AtividadeOneID';
import Loading from '../Loading';

export default function Atividades() {
    const [isLoading, setLoading] = useState(false);
    const [atividades, setAtividades] = useState([]);

    const userContext = useContext(UserContext);
    const tokenContext = useContext(TokenContext);

    const consultarAtividades = async () => {
        setLoading(true);
        setAtividades(await getAtividade(tokenContext.token));
        setLoading(false);
    }

    useEffect(() => {
        consultarAtividades();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={styles.text}>Fique de olho em suas Atividades.</Text>
            </View>
            <View style={styles.containerList}>
                {isLoading &&
                    <Loading color={_textCotent} />
                }
                {!isLoading &&
                    <FlatList
                        data={atividades}
                        keyExtractor={item => item.idAtividade.toString()}
                        renderItem={({ item }) => (
                            <>
                                {Object.values(userContext.userData.authorities)[0].authority == "ROLE_FISICO" &&
                                    <AtividadeFisico item={item} />
                                }
                                {Object.values(userContext.userData.authorities)[0].authority == "ROLE_JURIDICO" &&
                                    <AtividadeJuridico item={item} />
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
    container:{
        flex: 1
    },
    containerHeader: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerList: {
        flex: 0.8
    },
    text: {
        fontSize: 20
    }
})