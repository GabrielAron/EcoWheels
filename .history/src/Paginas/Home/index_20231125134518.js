import React, { useState } from 'react';
import { View, Text, Picker, TextInput, Button, StyleSheet, ImageBackground, Modal, TouchableOpacity, Image } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';
import Logo from '/imagens/Logo_EletriCar.png';

export default function Home() {
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const pickupLocations = ['Aeroporto Internacional de Guarulhos (GRU), São Paulo, SP', 'Aeroporto Santos Dumont (SDU), Rio de Janeiro, RJ', 'Opção 3', 'Opção 4', 'Opção 5'];
  const dropoffLocations = ['Opção A', 'Opção B', 'Opção C', 'Opção D', 'Opção E'];

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
            <Text style={styles.label}>Onde você quer retirar o carro:</Text>
            <Picker
              selectedValue={pickupLocation}
              onValueChange={(itemValue) => setPickupLocation(itemValue)}
              style={styles.picker}
            >
              {pickupLocations.map((location, index) => (
                <Picker.Item key={index} label={location} value={location} />
              ))}
            </Picker>
            <Text style={styles.label}>Onde você quer entregar o carro:</Text>
        <Picker
          selectedValue={dropoffLocation}
          onValueChange={(itemValue) => setDropoffLocation(itemValue)}
          style={styles.picker}
        >
          {dropoffLocations.map((location, index) => (
            <Picker.Item key={index} label={location} value={location} />
          ))}
        </Picker>
            <Text style={styles.label}>Data de retirada:</Text>
            <TextInput style={styles.input} placeholder="Data de retirada" keyboardType="numeric" value={date} onChangeText={handleDateChange} />
            <Text style={styles.label}>Data de entrega:</Text>
            <TextInput style={styles.input} placeholder="Data de entrega" keyboardType="numeric" value={returnDate} onChangeText={handleReturnDateChange} />
            <Text style={styles.label}>Você tem algum cupom de desconto?</Text>
            <TextInput style={styles.input} placeholder="20Wheels" />
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
    
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  pickerItem: {
    fontSize: 20,
    textAlign: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  cardContainer: {
    flex: 2,
    alignItems: 'center',
    height: 600,
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontWeight:'bold',
    fontSize: 20,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 20,
  },
  buttonContainer: {
    width: '50%',
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
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#333',
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
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 200,
  },
});