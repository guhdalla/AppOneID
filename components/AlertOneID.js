import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { _bgInvalid, _textInvalid } from '../styles/colors';

export default function AlertOneID({ message, type }) {
    return (
        <View style={
            type == 'success' ? styles.viewSuccess
                : type == 'invalid' ? styles.viewInvalid
                    : styles.viewDefault
        }>
            <Text style={
                type == 'success' ? styles.textSucces
                    : type == 'invalid' ? styles.textInvalid
                        : styles.textDefault
            }>
                {message}
            </Text>
        </View >
    );
}

const styles = StyleSheet.create({
    viewSuccess: {

    },
    textSucces: {

    },
    viewInvalid: {
        width: 200,
        backgroundColor: _bgInvalid,
        borderRadius: 10,
        padding: 10
    },
    textInvalid: {
        color: _textInvalid
    },
    viewDefault: {

    },
    textDefault: {

    }
})