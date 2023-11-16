import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Reservas() {
  const [lineWidth, setLineWidth] = useState(0);
  
  useEffect(() => {
    const getTextWidth = () => {
      const textWidth = Dimensions.get('window').width - 40; // Largura disponível - margens laterais (20 em cada lado)
      setLineWidth(textWidth);
    };

    getTextWidth();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={[styles.line, { width: lineWidth }]} />
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
    bottom: 48, // Altura do texto + espaçamento
    left: 20,
  },
});
