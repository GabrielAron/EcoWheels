import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import Fundo from '/imagens/fundoverde.jpg';

export default function App() {
  const [date, setDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleDateChange = (text) => {
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
  

  const handleReturnDateChange = (text) => {
    // Remove any non-numeric characters
    const numericText = text.replace(/[^0-9]/g, '');

    // Add slashes to form a date
    let formattedText = numericText.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');

    // Limit length
    formattedText = formattedText.substring(0, 10);

    setReturnDate(formattedText);
  };

  return (
    <ImageBackground source={Fundo} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Digite suas informações</Text>
        <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder="Onde você quer retirar o carro" />
          <TextInput style={styles.input} placeholder="Onde você quer entregar o carro" />
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />  
          <TextInput style={styles.input} placeholder="Data de retirada" keyboardType="numeric" value={date} onChangeText={handleDateChange} />
          <TextInput style={styles.input} placeholder="Data de entrega" keyboardType="numeric" value={returnDate} onChangeText={handleReturnDateChange} />
          <TextInput style={styles.input} placeholder="Você tem algum cupom de desconto?" />
          <View style={styles.buttonContainer}>
            <Button title="Continuar" onPress={() => {}} color="green" />
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
