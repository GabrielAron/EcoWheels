import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Home() {
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [password, setPassword] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [coupon, setCoupon] = useState('');

  const validCoupons = ['15Wheels', 'Eco10', 'Quero10conto'];

  const handleDateChange = (text) => {
    // Remover caracteres não numéricos
    const numericText = text.replace(/[^0-9]/g, '');

    // Adicionar barras para formar uma data
    let formattedText = numericText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

    // Limitar o comprimento
    formattedText = formattedText.substring(0, 10);

    setDate(formattedText);
  };

  const handleReturnDateChange = (text) => {
    // Remover caracteres não numéricos
    const numericText = text.replace(/[^0-9]/g, '');

    // Adicionar barras para formar uma data
    let formattedText = numericText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

    // Limitar o comprimento
    formattedText = formattedText.substring(0, 10);

    setReturnDate(formattedText);
  };

  const handleContinue = () => {
    if (!pickupLocation || !dropoffLocation || !password || !pickupDate || !returnDate) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
    } else if (validCoupons.includes(coupon)) {
      Alert.alert('Sucesso', 'Cupom de desconto aplicado!!! :)');
    } else if (coupon) {
      Alert.alert('Erro', 'Cupom de desconto inválido.');
    } else {
      Alert.alert('Sucesso', 'Informações adicionadas.');
    }
  };


  return (
    <ImageBackground source={Fundo} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Digite suas informações</Text>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Onde você quer retirar o carro" onChangeText={text => setPickupLocation(text)} />
          <TextInput style={styles.input} placeholder="Onde você quer entregar o carro" onChangeText={text => setDropoffLocation(text)} />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} onChangeText={text => setPassword(text)} />  
          <TextInput style={styles.input} placeholder="Data de retirada" keyboardType="numeric" value={pickupDate} onChangeText={text => handleDateChange(text, setPickupDate)} />
          <TextInput style={styles.input} placeholder="Data de entrega" keyboardType="numeric" value={returnDate} onChangeText={text => handleDateChange(text, setReturnDate)} />
          <TextInput style={styles.input} placeholder="Você tem algum cupom de desconto?" onChangeText={text => setCoupon(text)} />
          <View style={styles.buttonContainer}>
            <Button title="Continuar" onPress={handleContinue} color="green" />
          </View>
        </View>
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
    width: '100%',
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '30%',
    alignSelf: 'center',
    marginTop: 10,
  },
});
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