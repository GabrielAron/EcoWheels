import React, { useContext } from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';
import { ReservaContext } from '../ReservaContext';

const Card = ({ title, image }) => (
  <View style={styles.card}>
    <ImageBackground source={{ uri: image }} style={styles.image}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ImageBackground>
  </View>
);

export default function Reservas() {
  const { reservas } = useContext(ReservaContext);

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros Reservados</Text>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {reservas.map((carro, index) => (
              <Card key={index} title={carro.title} image={carro.image} />
            ))}
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
    color: '#fffbff',
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
    paddingLeft: 75,
  },
  card: {
    width: '90%',
    height: 200,
    marginBottom: 45,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fffbff',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
});
