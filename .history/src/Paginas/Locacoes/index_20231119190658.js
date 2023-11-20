import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  StyleSheet,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';
import CarrosReservados from './CarrosReservados';

const Card = ({ title, image, handleReserva }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Button
            title="Reservar"
            onPress={() => setModalVisible(true)}
          />
        </View>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Deseja mesmo reservar o carro?
            </Text>

            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setModalVisible(!modalVisible);
                handleReserva(title);
              }}
              title="Sim"
            />
            <Button
              style={[styles.button, styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
              title="Não"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default function Reservas() {
  const [cards, setCards] = useState([
    {
      title: 'QUALIDADE PARA UM CONFORTO E ÓTIMO PASSEIO - Exquisite Cruiser 1.8',
      image:
        'https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a40b4ef5-35ec-4e32-a5ff-cc2ef5e85345/PhotoReal_make_a_background_image_for_a_cell_phone_application_2.jpg?w=512',
    },
    {
      title: 'DESIGN E CONFORTO EM UM - Rider GT 3.0',
      image:
        'https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a40b4ef5-35ec-4e32-a5ff-cc2ef5e85345/PhotoReal_make_a_background_image_for_a_cell_phone_application_3.jpg?w=512',
    },
    // Resto dos cards
  ]);

  const [reservados, setReservados] = useState([]);

  const handleReserva = (title) => {
    const cardSelecionado = cards.find((card) => card.title === title);

    if (cardSelecionado) {
      setReservados([...reservados, cardSelecionado]);

      const novosCards = cards.filter((card) => card.title !== title);
      setCards(novosCards);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                image={card.image}
                handleReserva={handleReserva}
              />
            ))}
          </ScrollView>
        </View>
      </ImageBackground>
      <CarrosReservados reservados={reservados} />
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
     paddingRight: 75,
  },
  card: {
    width: 250,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  buttonCancel: {
    backgroundColor: '#FF0000',
  },
});