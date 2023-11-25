import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Modal, TouchableOpacity, Image } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';
import Logo from '/imagens/Logo_EletriCar.png';

export default function Home() {
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleDateChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    let formattedText = numericText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    formattedText = formattedText.substring(0, 10);
    setDate(formattedText);
  };

  const handleReturnDateChange = (text) => {
    const numericText = text.replace(/[^0-9]/g, '');
    let formattedText = numericText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    formattedText = formattedText.substring(0, 10);
    setReturnDate(formattedText);
  };

  const handleContinue = () => {
    if (date.trim() === '' || returnDate.trim() === '') {
      setShowModal(true);
    } else {
      // Lógica para continuar
    }
  };

  return (
    <ImageBackground source={Fundo} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={Logo} style={styles.logo} resizeMode="contain" />
          <Text style={styles.title}>Digite suas informações</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.formContainer}>
            <TextInput style={styles.input} placeholder="Onde você quer retirar o carro" />
            <TextInput style={styles.input} placeholder="Onde você quer entregar o carro" />
            <TextInput style={styles.input} placeholder="Data de retirada" keyboardType="numeric" value={date} onChangeText={handleDateChange} />
            <TextInput style={styles.input} placeholder="Data de entrega" keyboardType="numeric" value={returnDate} onChangeText={handleReturnDateChange} />
            <TextInput style={styles.input} placeholder="Você tem algum cupom de desconto?" />
            <View style={styles.buttonContainer}>
              <Button title="Continuar" onPress={handleContinue} color="green" />
            </View>
          </View>
        </View>
        <Modal visible={showModal} animationType="fade" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Preencha todos os campos corretamente!</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setShowModal(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // Altere o valor para reduzir a margem inferior
    color: '#fff',
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',

  },
  buttonContainer: {
    width: '30%',
    alignSelf: 'center',
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 1,
  },
  modalButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20, // Adicione um valor de margem superior
  },
  logo: {
    width: 150,
    height: 150,
  },
});