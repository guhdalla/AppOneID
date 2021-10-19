import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { _false, _true } from '../styles/colors';

export function CheckIn() {
    return (
        <Icon name="log-in" color={_true} size={30} />
    );
}

export function CheckOut() {
    return (
        <Icon name="log-out" color={_false} size={30} />
    );
}