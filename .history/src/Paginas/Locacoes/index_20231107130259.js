import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Reservas() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={styles.line} />
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
    color: '#fffeff',
    fontSize: 18,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    height: 2,
    backgroundColor: 'lightgreen',
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
  },
});