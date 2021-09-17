import React from 'react';
import { StyleSheet, Image } from 'react-native';

export default function LogoOneID() {
    return (
        <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 50,
        marginBottom: 100
      },
})