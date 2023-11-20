import React, { useState } from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, ScrollView } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

const Card = ({ title, image, handleReserva }) => (
  <View style={styles.card}>
    <ImageBackground source={{ uri: image }} style={styles.image}>
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Button title="Reservar" onPress={() => handleReserva(title)} />
      </View>
    </ImageBackground>
  </View>
);

const CarrosReservados = ({ reservados }) => {
  return (
    <View>
      <Text style={styles.reservadosTitle}>Carros Reservados:</Text>
      {reservados.map((carro) => (
        <Text key={carro.title} style={styles.reservadosText}>{carro.title}</Text>
      ))}
    </View>
  );
};

export default function Reservas() {
  const [reservados, setReservados] = useState([]);
  
  const handleReserva = (title) => {
    const cardReservado = reservados.find((card) => card.title === title);

    if (!cardReservado) {
      const cardSelecionado = cards.find((card) => card.title === title);

      if (cardSelecionado) {
        setReservados([...reservados, cardSelecionado]);

        const novosCards = cards.filter((card) => card.title !== title);
        setCards(novosCards);
      }
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card title="QUALIDADE PARA UM CONFORTO E ÓTIMO PASSEIO - Exquisite Cruiser 1.8" image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a40b4ef5-35ec-4e32-a5ff-cc2ef5e85345/PhotoReal_make_a_background_image_for_a_cell_phone_application_2.jpg?w=512" handleReserva={handleReserva} />
            <Card title="DESIGN E CONFORTO EM UM - Rider GT 3.0" image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a40b4ef5-35ec-4e32-a5ff-cc2ef5e85345/PhotoReal_make_a_background_image_for_a_cell_phone_application_3.jpg?w=512" handleReserva={handleReserva} />
            <Card title="FORÇA PARA DESAFIOS OFF-Road - Viper GT 3.0 " image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a0fe3adc-2c2f-4336-bc49-e57599170dd1/PhotoReal_faa_um_hummer_eltrico_novo_andando_por_uma_cidade_3.jpg?w=512" handleReserva={handleReserva} />
          </ScrollView>
        </View>
        <CarrosReservados reservados={reservados} />
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
  reservadosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fffbff',
    marginTop: 20,
    marginLeft: 20,
  },
  reservadosText: {
    fontSize: 16,
    color: '#fffbff',
    marginLeft: 20,
  },
});