import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Reservas() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <View style={styles.content}>
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
  content: {
    alignItems: 'center', // Centralizar horizontalmente
  },
  text: {
    color: '#fffeff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    height: 2,
    backgroundColor: 'lightgreen',
    width: '100%', // Largura total
    marginTop: 5, // Espaçamento entre o texto e a linha
  },
});