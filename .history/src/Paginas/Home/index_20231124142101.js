import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { format, isValid, parse } from 'date-fns';

export default function App() {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const formatToDDMMYYYY = (dateString) => {
    const [day, month, year] = dateString.split('/');
    if (day >= 1 && day <= 31 && month >= 1 && month <= 12 && year.length === 4) {
      return dateString;
    }
    const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date());
    if (isValid(parsedDate)) {
      return format(parsedDate, 'dd/MM/yyyy');
    }
    return '';
  };

  const handlePickupDateChange = (text) => {
    const formattedDate = formatToDDMMYYYY(text);
    setPickupDate(formattedDate);
  };

  const handleReturnDateChange = (text) => {
    const formattedDate = formatToDDMMYYYY(text);
    setReturnDate(formattedDate);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela_Pesquisa</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Onde você quer retirar o carro"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Onde você quer entregar o carro"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Data de retirada"
          value={pickupDate}
          onChangeText={handlePickupDateChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Data de entrega"
          value={returnDate}
          onChangeText={handleReturnDateChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Você tem algum cupom de desconto?"
        />
      </View>
      <Button title="Continuar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    padding: 10,
    textAlign: 'center',
  },
});
