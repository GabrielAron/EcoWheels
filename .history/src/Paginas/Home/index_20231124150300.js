import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function App() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [password, setPassword] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [coupon, setCoupon] = useState('');

  const handleDateChange = (text, setDate) => {
    // Remove any non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');

    // Add slashes to form a date
    let formattedText = numericText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

    // Limit length
    formattedText = formattedText.substring(0, 10);

    // Validate date
    const [day, month, year] = formattedText.split('/');
    const currentYear = new Date().getFullYear();
    if ((day >= 1 && day <= 31) && (month >= 1 && month <= 12) && (year >= currentYear && year <= currentYear + 5)) {
      setDate(formattedText);
    }
  };

  const handleContinue = () => {
    if (!pickupLocation || !dropoffLocation || !password || !pickupDate || !returnDate) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente.');
    } else {
      // Continue with the next step
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
