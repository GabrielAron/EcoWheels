import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

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

    // Adicionar barras para formar uma data
    let formattedText = numericText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

    // Limitar o comprimento
    formattedText = formattedText.substring(0, 10);

    setReturnDate(formattedText);
  };

  const handleContinue = () => {
    if (date.trim() === '' || returnDate.trim() === '') {
      setShowModal(true);
    } else {
      // Lógica para continuar para a próxima tela
    }
  };

  return (
    <ImageBackground source={Fundo} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Digite suas informações</Text>
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
    marginBottom: 20,
    color: '#fff',
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
    padding: 10,
    width: '80%', 
    alignSelf: 'center',
    paddingVertical: 20, 
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
    marginBottom: 20,
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
});