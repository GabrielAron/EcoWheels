import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

const Card = ({ title, image }) => (
  <View style={styles.card}>
    <ImageBackground source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Button title="Reservar" onPress={() => {}} />
  </View>
);

export default function Reservas() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <Card title="QUALIDADE PARA UM CONFORTO E OTIMO PASSEIO" image="url_da_imagem_1" />
        <Card title="DESIGN E CONFORTO EM UM Rider GT 3.0 ou similar" image="url_da_imagem_2" />
        <Card title="FORCA PARA DESAFIOS OFF-Road Viper GT 3.0 ou similar" image="url_da_imagem_3" />
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
    fontSize: 36,
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    width: '80%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    alignItems:center
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
