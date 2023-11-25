import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Alert } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function Home() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [password, setPassword] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [coupon, setCoupon] = useState('');

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
          <TextInput style={styles.input} placeholder="Data de retirada" keyboardType="numeric" value={pickupDate} onChangeText={text => setPickupDate(text)} />
          <TextInput style={styles.input} placeholder="Data de entrega" keyboardType="numeric" value={returnDate} onChangeText={text => setReturnDate(text)} />
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
