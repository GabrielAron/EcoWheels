import React from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, ScrollView } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

const Card = ({ title, image }) => (
  <View style={styles.card}>
    <ImageBackground source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Button title="Reservar" onPress={() => { }} />
  </View>
);

export default function Reservas() {
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card title="QUALIDADE PARA UM CONFORTO E OTIMO PASSEIO" image="url_da_imagem_1" />
            <Card title="DESIGN E CONFORTO EM UM Rider GT 3.0 ou similar" image="url_da_imagem_2" />
            <Card title="FORCA PARA DESAFIOS OFF-Road Viper GT 3.0 ou similar" image="url_da_imagem_3" />
            <Card title="FORCA PARA DESAFIOS OFF-Road Viper GT 3.0 ou similar" image="url_da_imagem_3" />
            <Card title="NOVO CARD" image="url_da_imagem_4" />
          </ScrollView>
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
 cardContainer: {
  flex: 1,
  alignItems: 'center', // Centraliza os cards horizontalmente
  justifyContent: 'center', // Centraliza os cards verticalmente
  paddingTop: '50%', // Adiciona um espaço no topo do container dos cards
},
  card: {
    width: '90%', // Aumenta a largura do card para 90%
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 45,   
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
