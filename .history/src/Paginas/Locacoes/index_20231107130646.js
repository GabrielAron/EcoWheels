import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Reservas() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Carros</Text>
          <View style={styles.line} />
        </View>
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
  textContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    color: '#fffeff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'lightgreen',
  },
});