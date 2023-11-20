import React, { useState } from 'react';
import { View, Text, ImageBackground, Button, StyleSheet, ScrollView, Modal, Alert } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

const Card = ({ title, image }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Button title="Reservar" onPress={() => setModalVisible(true)} />
        </View>
      </ImageBackground>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Deseja mesmo reservar o carro?</Text>

            <Button
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
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
  return (
    <View style={styles.container}>
      <ImageBackground source={Fundo} style={styles.image}>
        <Text style={styles.text}>Carros</Text>
        <View style={styles.cardContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Card title="QUALIDADE PARA UM CONFORTO E ÓTIMO PASSEIO - Exquisite Cruiser 1.8" image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a40b4ef5-35ec-4e32-a5ff-cc2ef5e85345/PhotoReal_make_a_background_image_for_a_cell_phone_application_2.jpg?w=512"/>
            <Card title="DESIGN E CONFORTO EM UM - Rider GT 3.0" image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a40b4ef5-35ec-4e32-a5ff-cc2ef5e85345/PhotoReal_make_a_background_image_for_a_cell_phone_application_3.jpg?w=512" />
            <Card title="FORÇA PARA DESAFIOS OFF-Road - Viper GT 3.0 " image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/a0fe3adc-2c2f-4336-bc49-e57599170dd1/PhotoReal_faa_um_hummer_eltrico_novo_andando_por_uma_cidade_3.jpg?w=512" />
            <Card title="UM CARRO ANTIGO E ESTILOSO PARA OS AMANTES DE CLÁSSICOS - Bentley 1.8" image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/c6457b66-6149-4c4d-8408-99c27071dc1e/PhotoReal_faa_um_carro_eletrico_executivo_andando_por_uma_cida_0.jpg?w=512" />
            <Card title="UM CARRO VERSÁTIL QUE ATENDE A TODAS AS NECESSIDADES FLEXUS X 1.0" image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/f62f0f84-2ea5-4c9d-a4e3-33ade848f3b2/PhotoReal_make_a_background_image_for_a_cell_phone_application_3.jpg?w=512" />
            <Card title="UMA OPÇÃO PERFEITA PARA QUEM BUSCA PRATICIDADE E CONFORTO - LUXURY DRIVE 1.6" image="https://cdn.leonardo.ai/users/cf8d0bec-5da3-4e6a-aed2-13735b2a6925/generations/589507b8-d87b-4a85-b05e-c325ccebd6b6/PhotoReal_make_a_background_image_for_a_cell_phone_application_1.jpg?w=512" />
            <Card title="UM CARRO ESPORTIVO COM DESEMPENHO DE ALTA POTÊNCIA Vortex GT 5.0" image="https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2023/01/13072602/Carro_esportivo.jpg" />
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
    color:'#fffbff',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(128, 128, 128, 0.5)',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonCancel: {
    backgroundColor: "#f00",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
