import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Reservas() {

    return (
        <View style={styles.container}>
            <ImageBackground source={Fundo} style={styles.image}>
                <Text style={styles.text}>Login</Text>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    text: {
        color: '#00000',
        fontSize: 20,
        position: 'absolute',
        top: 70,
        left: 0,
        right: 0,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});