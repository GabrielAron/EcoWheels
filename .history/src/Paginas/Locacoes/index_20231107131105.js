import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';
import { TSMeasureParams, TSMeasureResult, TextSize } from 'react-native-text-size';

export default function Reservas() {
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    const measureText = async () => {
      const params: TSMeasureParams = {
        text: 'Carros', // Texto para medir
        width: 1000, // Largura máxima permitida
        fontSize: 18, // Tamanho da fonte
        fontFamily: 'System', // Fonte
        fontWeight: 'bold', // Peso da fonte
      }
      const size: TSMeasureResult = await TextSize.measure(params);
      setLineWidth(size.width);
    };

    measureText();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>
          Carros
          <View style={[styles.underline, { width: lineWidth }]} />
        </Text>
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
  underline: {
    height: 2,
    backgroundColor: 'blue',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
